import React, { createContext, useContext, useState, useEffect } from 'react';
import { NavigationTab, UserProfile, QuizAttempt } from '../types';

interface AppContextType {
  tab: NavigationTab;
  setTab: (tab: NavigationTab) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  toggleDarkMode: () => void;
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
  userProfile: UserProfile;
  toggleBookmark: (mcqId: string) => void;
  isBookmarked: (mcqId: string) => boolean;
  addMistake: (mcqId: string) => void;
  removeMistake: (mcqId: string) => void;
  clearAllMistakes: () => void;
  recordQuizAttempt: (attempt: QuizAttempt) => void;
  updateTargetExam: (exam: string) => void;
  updateUserName: (name: string) => void;
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

  // Dark mode init with localStorage and document class
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('matb_dark_mode');
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

  // User Profile with localStorage
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('matb_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_PROFILE;
      }
    }
    return DEFAULT_PROFILE;
  });

  useEffect(() => {
    localStorage.setItem('matb_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  const toggleBookmark = (mcqId: string) => {
    setUserProfile((prev) => {
      const exists = prev.bookmarks.includes(mcqId);
      const updated = exists
        ? prev.bookmarks.filter((id) => id !== mcqId)
        : [...prev.bookmarks, mcqId];
      return { ...prev, bookmarks: updated };
    });
  };

  const isBookmarked = (mcqId: string) => userProfile.bookmarks.includes(mcqId);

  const addMistake = (mcqId: string) => {
    setUserProfile((prev) => {
      if (prev.mistakeIds.includes(mcqId)) return prev;
      return { ...prev, mistakeIds: [...prev.mistakeIds, mcqId] };
    });
  };

  const removeMistake = (mcqId: string) => {
    setUserProfile((prev) => ({
      ...prev,
      mistakeIds: prev.mistakeIds.filter((id) => id !== mcqId),
    }));
  };

  const clearAllMistakes = () => {
    setUserProfile((prev) => ({
      ...prev,
      mistakeIds: [],
    }));
  };

  const recordQuizAttempt = (attempt: QuizAttempt) => {
    setUserProfile((prev) => {
      const newMistakes = new Set(prev.mistakeIds);
      attempt.incorrectQuestions.forEach((q) => newMistakes.add(q.mcq.id));
      const pointsEarned = attempt.score * 15;
      return {
        ...prev,
        points: prev.points + pointsEarned,
        mistakeIds: Array.from(newMistakes),
        quizHistory: [attempt, ...prev.quizHistory.slice(0, 19)],
      };
    });
  };

  const updateTargetExam = (exam: string) => {
    setUserProfile((prev) => ({ ...prev, targetExam: exam }));
  };

  const updateUserName = (name: string) => {
    setUserProfile((prev) => ({ ...prev, name }));
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
        userProfile,
        toggleBookmark,
        isBookmarked,
        addMistake,
        removeMistake,
        clearAllMistakes,
        recordQuizAttempt,
        updateTargetExam,
        updateUserName,
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
