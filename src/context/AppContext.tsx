import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { NavigationTab, UserProfile, QuizAttempt, ThemeStyle } from '../types';
import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  updateProfile as updateFirebaseProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User 
} from '../lib/firebase';
import { 
  getUserProfileFromDb, 
  saveUserProfileToDb, 
  recordQuizAttemptInDb, 
  mergeGuestProfileIntoDb 
} from '../lib/firestoreService';
import { validateQuizAttempt } from '../lib/validation';

interface AppContextType {
  tab: NavigationTab;
  setTab: (tab: NavigationTab) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleDarkMode: () => void;
  themeStyle: ThemeStyle;
  setThemeStyle: (style: ThemeStyle) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  globalSearchQuery: string;
  setGlobalSearchQuery: (query: string) => void;
  authModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;
  domainModalOpen: boolean;
  setDomainModalOpen: (open: boolean) => void;
  selectedCategorySlug: string | null;
  setSelectedCategorySlug: (slug: string | null) => void;
  selectedExamId: string | null;
  setSelectedExamId: (examId: string | null) => void;
  selectedPastPaperId: string | null;
  setSelectedPastPaperId: (id: string | null) => void;
  
  // Real Firebase Auth state & methods
  user: User | null;
  authLoading: boolean;
  isSyncing: boolean;
  loginWithEmail: (email: string, pass: string) => Promise<{ success: boolean; error?: string }>;
  signupWithEmail: (email: string, pass: string, name: string, targetExam: string, province: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<{ success: boolean; error?: string }>;

  // Database-backed user profile & operations
  userProfile: UserProfile;
  toggleBookmark: (mcqId: string) => void;
  isBookmarked: (mcqId: string) => boolean;
  addMistake: (mcqId: string) => void;
  removeMistake: (mcqId: string) => void;
  clearAllMistakes: () => void;
  recordQuizAttempt: (attempt: QuizAttempt) => Promise<{ success: boolean; error?: string }>;
  updateTargetExam: (exam: string) => void;
  updateUserName: (name: string) => void;
  updateProvince: (province: string) => void;
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Aspirant',
  email: 'aspirant@prep.pk',
  targetExam: 'STS (Sukkur IBA BPS 5-15)',
  province: 'Sindh',
  points: 450,
  streakDays: 4,
  bookmarks: ['ps-01', 'ca-02', 'es-01', 'eng-01'],
  mistakeIds: ['ca-05', 'math-02'],
  quizHistory: [
    {
      id: 'quiz-init-1',
      date: 'Yesterday',
      title: 'Pakistan Studies & Current Affairs Booster',
      totalQuestions: 10,
      score: 8,
      timeSpentSeconds: 340,
      incorrectQuestions: [],
    },
  ],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tab, setTab] = useState<NavigationTab>('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [domainModalOpen, setDomainModalOpen] = useState(false);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [selectedPastPaperId, setSelectedPastPaperId] = useState<string | null>(null);

  // Real Firebase Auth states
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Dark mode init with localStorage and document class
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('matb_dark_mode') ?? localStorage.getItem('meaq_dark_mode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('matb_dark_mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('matb_dark_mode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Theme Style (emerald, sapphire, aurora, sunset)
  const [themeStyle, setThemeStyle] = useState<ThemeStyle>(() => {
    const saved = (localStorage.getItem('matb_theme_style') ?? localStorage.getItem('meaq_theme_style')) as ThemeStyle;
    if (saved && ['emerald', 'sapphire', 'aurora', 'sunset'].includes(saved)) {
      return saved;
    }
    return 'emerald';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeStyle);
    localStorage.setItem('matb_theme_style', themeStyle);
  }, [themeStyle]);

  // Guest LocalStorage Profile Cache
  const getGuestProfile = (): UserProfile => {
    const saved = localStorage.getItem('matb_user_profile') ?? localStorage.getItem('meaq_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_PROFILE;
      }
    }
    return DEFAULT_PROFILE;
  };

  const [userProfile, setUserProfile] = useState<UserProfile>(getGuestProfile);

  // Synchronize Auth State with Firestore Database
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setAuthLoading(true);
      if (currentUser) {
        setUser(currentUser);
        setIsSyncing(true);
        try {
          // Merge current local guest profile into real Firestore database
          const localGuest = getGuestProfile();
          const syncedProfile = await mergeGuestProfileIntoDb(currentUser.uid, localGuest, {
            displayName: currentUser.displayName,
            email: currentUser.email,
          });
          setUserProfile(syncedProfile);
          localStorage.setItem('matb_user_profile', JSON.stringify(syncedProfile));
        } catch (err) {
          console.error('Failed to sync user profile with Firestore:', err);
        } finally {
          setIsSyncing(false);
        }
      } else {
        setUser(null);
        // Fallback to local guest profile
        const localGuest = getGuestProfile();
        setUserProfile(localGuest);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sync state changes to backend (Firestore) if logged in, or localStorage if guest
  const syncProfileChange = useCallback((updated: UserProfile) => {
    setUserProfile(updated);
    localStorage.setItem('matb_user_profile', JSON.stringify(updated));

    if (auth.currentUser) {
      saveUserProfileToDb(auth.currentUser.uid, updated).catch((err) => {
        console.error('Failed to persist profile update to Firestore:', err);
      });
    }
  }, []);

  // Real Auth Actions
  const loginWithEmail = async (email: string, pass: string): Promise<{ success: boolean; error?: string }> => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pass);
      return { success: true };
    } catch (err: any) {
      let message = 'Failed to sign in. Please verify your credentials.';
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        message = 'Invalid email or password. Please check your credentials.';
      } else if (err.code === 'auth/too-many-requests') {
        message = 'Too many attempts. Please try again in a few minutes.';
      } else if (err.message) {
        message = err.message;
      }
      return { success: false, error: message };
    }
  };

  const signupWithEmail = async (
    email: string, 
    pass: string, 
    name: string, 
    targetExam: string, 
    province: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email.trim(), pass);
      if (name.trim()) {
        await updateFirebaseProfile(res.user, { displayName: name.trim() });
      }

      const initialProfile: UserProfile = {
        ...userProfile,
        name: name.trim() || 'Aspirant',
        email: email.trim(),
        targetExam: targetExam || userProfile.targetExam,
        province: province || userProfile.province,
      };

      await saveUserProfileToDb(res.user.uid, initialProfile);
      syncProfileChange(initialProfile);
      return { success: true };
    } catch (err: any) {
      let message = 'Registration failed. Please try again.';
      if (err.code === 'auth/email-already-in-use') {
        message = 'An account with this email address already exists. Please sign in instead.';
      } else if (err.code === 'auth/weak-password') {
        message = 'Password should be at least 6 characters long.';
      } else if (err.code === 'auth/invalid-email') {
        message = 'Please enter a valid email address.';
      } else if (err.message) {
        message = err.message;
      }
      return { success: false, error: message };
    }
  };

  const loginWithGoogle = async (): Promise<{ success: boolean; error?: string }> => {
    try {
      await signInWithPopup(auth, googleProvider);
      return { success: true };
    } catch (err: any) {
      if (err.code === 'auth/popup-closed-by-user') {
        return { success: false, error: 'Sign in popup closed before finishing.' };
      }
      return { success: false, error: err.message || 'Google sign-in could not be completed.' };
    }
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
    setUser(null);
    const guest = getGuestProfile();
    setUserProfile(guest);
  };

  const sendPasswordReset = async (email: string): Promise<{ success: boolean; error?: string }> => {
    try {
      await sendPasswordResetEmail(auth, email.trim());
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'Unable to send password reset email.' };
    }
  };

  // User Profile & Practice Actions
  const toggleBookmark = (mcqId: string) => {
    const exists = userProfile.bookmarks.includes(mcqId);
    const updatedBookmarks = exists
      ? userProfile.bookmarks.filter((id) => id !== mcqId)
      : [...userProfile.bookmarks, mcqId];
    
    const updated = { ...userProfile, bookmarks: updatedBookmarks };
    syncProfileChange(updated);
  };

  const isBookmarked = (mcqId: string) => userProfile.bookmarks.includes(mcqId);

  const addMistake = (mcqId: string) => {
    if (userProfile.mistakeIds.includes(mcqId)) return;
    const updated = { ...userProfile, mistakeIds: [...userProfile.mistakeIds, mcqId] };
    syncProfileChange(updated);
  };

  const removeMistake = (mcqId: string) => {
    const updated = {
      ...userProfile,
      mistakeIds: userProfile.mistakeIds.filter((id) => id !== mcqId),
    };
    syncProfileChange(updated);
  };

  const clearAllMistakes = () => {
    const updated = {
      ...userProfile,
      mistakeIds: [],
    };
    syncProfileChange(updated);
  };

  // Backend-Validated Quiz Attempt Recording
  const recordQuizAttempt = async (attempt: QuizAttempt): Promise<{ success: boolean; error?: string }> => {
    // 1. Strict validation against impossible scores
    const validation = validateQuizAttempt(attempt, attempt.totalQuestions);
    if (!validation.isValid) {
      console.error('Quiz attempt rejected due to invalid score:', validation.error);
      return { success: false, error: validation.error };
    }

    const sanitizedAttempt: QuizAttempt = {
      ...attempt,
      score: validation.sanitizedScore,
    };

    const newMistakes = new Set(userProfile.mistakeIds);
    if (sanitizedAttempt.incorrectQuestions) {
      sanitizedAttempt.incorrectQuestions.forEach((q) => {
        if (q.mcq && q.mcq.id) newMistakes.add(q.mcq.id);
      });
    }

    const pointsEarned = Math.round(validation.sanitizedScore * 15);
    const updatedProfile: UserProfile = {
      ...userProfile,
      points: userProfile.points + pointsEarned,
      mistakeIds: Array.from(newMistakes),
      quizHistory: [sanitizedAttempt, ...userProfile.quizHistory.slice(0, 24)],
    };

    // Update in-memory state & local storage immediately
    syncProfileChange(updatedProfile);

    // If authenticated, persist to real Firestore database subcollection with backend validation
    if (auth.currentUser) {
      const dbResult = await recordQuizAttemptInDb(auth.currentUser.uid, sanitizedAttempt);
      if (!dbResult.success) {
        console.warn('Firestore quiz record validation warning:', dbResult.error);
        return dbResult;
      }
    }

    return { success: true };
  };

  const updateTargetExam = (exam: string) => {
    syncProfileChange({ ...userProfile, targetExam: exam });
  };

  const updateUserName = (name: string) => {
    syncProfileChange({ ...userProfile, name });
  };

  const updateProvince = (province: string) => {
    syncProfileChange({ ...userProfile, province });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AppContext.Provider
      value={{
        tab,
        setTab,
        darkMode,
        setDarkMode,
        toggleDarkMode,
        themeStyle,
        setThemeStyle,
        searchOpen,
        setSearchOpen,
        globalSearchQuery,
        setGlobalSearchQuery,
        authModalOpen,
        setAuthModalOpen,
        domainModalOpen,
        setDomainModalOpen,
        selectedCategorySlug,
        setSelectedCategorySlug,
        selectedExamId,
        setSelectedExamId,
        selectedPastPaperId,
        setSelectedPastPaperId,
        user,
        authLoading,
        isSyncing,
        loginWithEmail,
        signupWithEmail,
        loginWithGoogle,
        logout,
        sendPasswordReset,
        userProfile,
        toggleBookmark,
        isBookmarked,
        addMistake,
        removeMistake,
        clearAllMistakes,
        recordQuizAttempt,
        updateTargetExam,
        updateUserName,
        updateProvince,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

