import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  User as UserIcon, 
  Target, 
  Flame, 
  Award, 
  Bookmark, 
  CheckCircle, 
  HelpCircle, 
  LogOut, 
  Save,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Cloud,
  Loader2,
  AlertCircle,
  MapPin,
  Sparkles
} from 'lucide-react';
import { EXAMS_DATA } from '../data/examsData';

export const AuthModal: React.FC = () => {
  const { 
    authModalOpen, 
    setAuthModalOpen, 
    user,
    authLoading,
    isSyncing,
    loginWithEmail,
    signupWithEmail,
    loginWithGoogle,
    logout,
    sendPasswordReset,
    userProfile, 
    updateTargetExam, 
    updateUserName,
    updateProvince,
    setTab
  } = useApp();

  // Mode: 'signin' | 'signup' | 'forgot'
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'forgot'>('signin');
  
  // Auth Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [targetExam, setTargetExam] = useState('STS (Sukkur IBA BPS 5-15)');
  const [province, setProvince] = useState('Sindh');
  
  // Profile edit fields for logged in user
  const [editName, setEditName] = useState(userProfile.name);
  const [editExam, setEditExam] = useState(userProfile.targetExam);
  const [editProvince, setEditProvince] = useState(userProfile.province);

  // States
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!authModalOpen) return null;

  // Handle Google Sign In
  const handleGoogleSignIn = async () => {
    setSubmitting(true);
    setErrorMessage(null);
    const res = await loginWithGoogle();
    setSubmitting(false);
    if (!res.success) {
      setErrorMessage(res.error || 'Google sign-in failed. Please try again.');
    } else {
      setAuthModalOpen(false);
    }
  };

  // Handle Email Login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    setSubmitting(true);
    setErrorMessage(null);
    const res = await loginWithEmail(email, password);
    setSubmitting(false);
    if (!res.success) {
      setErrorMessage(res.error || 'Failed to sign in.');
    } else {
      setAuthModalOpen(false);
    }
  };

  // Handle Email Registration
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!email.trim()) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    setSubmitting(true);
    setErrorMessage(null);
    const res = await signupWithEmail(email, password, fullName, targetExam, province);
    setSubmitting(false);
    if (!res.success) {
      setErrorMessage(res.error || 'Registration failed.');
    } else {
      setAuthModalOpen(false);
    }
  };

  // Handle Password Reset
  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMessage('Please enter your account email address.');
      return;
    }
    setSubmitting(true);
    setErrorMessage(null);
    const res = await sendPasswordReset(email);
    setSubmitting(false);
    if (!res.success) {
      setErrorMessage(res.error || 'Could not send reset email.');
    } else {
      setSuccessMessage('Password reset link has been dispatched to your email.');
      setTimeout(() => {
        setAuthMode('signin');
        setSuccessMessage(null);
      }, 4000);
    }
  };

  // Handle Profile Save for logged in user
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (editName.trim()) {
      updateUserName(editName.trim());
    }
    updateTargetExam(editExam);
    updateProvince(editProvince);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setAuthModalOpen(false);
    }, 800);
  };

  const handleSignOut = async () => {
    setSubmitting(true);
    await logout();
    setSubmitting(false);
    setAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
          <div className="flex items-center gap-3">
            {user ? (
              user.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt={userProfile.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400/60 shadow-xs" 
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-emerald-500/30 flex items-center justify-center border border-emerald-400/50 font-bold text-lg">
                  {userProfile.name.charAt(0).toUpperCase() || 'A'}
                </div>
              )
            ) : (
              <div className="w-11 h-11 rounded-full bg-emerald-500/30 flex items-center justify-center border border-emerald-400/50">
                <Sparkles className="w-5 h-5 text-emerald-200" />
              </div>
            )}

            <div>
              <h3 className="font-bold text-lg font-display">
                {user ? 'Aspirant Study Profile' : 'Aspirant Cloud Account'}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-emerald-200">
                {user ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Cloud Synced & Protected</span>
                  </>
                ) : (
                  <span>Sign in to sync bookmarks & scores cross-device</span>
                )}
              </div>
            </div>
          </div>

          <button
            id="close-auth-modal-btn"
            onClick={() => setAuthModalOpen(false)}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700/50 transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* LOGGED IN VIEW */}
        {user ? (
          <div>
            {/* Stats Row */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 grid grid-cols-4 gap-2 text-center">
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <div className="flex justify-center text-amber-500 mb-0.5">
                  <Flame className="w-4 h-4 fill-amber-500" />
                </div>
                <div className="font-extrabold text-slate-900 dark:text-white text-base">
                  {userProfile.streakDays}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  Days Streak
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                <div className="flex justify-center text-emerald-600 mb-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-slate-900 dark:text-white text-base">
                  {userProfile.points}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  Study Pts
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setTab('bookmarks');
                  setAuthModalOpen(false);
                }}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-emerald-500 transition cursor-pointer"
              >
                <div className="flex justify-center text-blue-500 mb-0.5">
                  <Bookmark className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-slate-900 dark:text-white text-base">
                  {userProfile.bookmarks.length}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  Bookmarks
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setTab('mistakes');
                  setAuthModalOpen(false);
                }}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-rose-500 transition cursor-pointer"
              >
                <div className="flex justify-center text-rose-500 mb-0.5">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="font-extrabold text-slate-900 dark:text-white text-base">
                  {userProfile.mistakeIds.length}
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                  Mistakes
                </div>
              </button>
            </div>

            {/* Cloud Sync Status Pill */}
            <div className="mx-5 mt-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                <Cloud className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="truncate">
                  Signed in as <strong className="font-semibold">{user.email || user.displayName}</strong>
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 font-bold text-[10px] uppercase tracking-wider shrink-0">
                Active Firestore
              </span>
            </div>

            {/* Edit Profile Form */}
            <form onSubmit={handleSaveProfile} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                  Full Name / Aspirant Name
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Target Exam
                  </label>
                  <div className="relative">
                    <Target className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={editExam}
                      onChange={(e) => setEditExam(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden cursor-pointer"
                    >
                      {EXAMS_DATA.map((ex) => (
                        <option key={ex.id} value={`${ex.shortName} (${ex.conductedBy})`}>
                          {ex.shortName} — {ex.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Domicile / Province
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={editProvince}
                      onChange={(e) => setEditProvince(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden cursor-pointer"
                    >
                      <option value="Sindh">Sindh (Rural & Urban)</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                      <option value="Balochistan">Balochistan</option>
                      <option value="Islamabad / Federal">Islamabad / Federal</option>
                      <option value="Azad Kashmir & GB">Azad Kashmir & Gilgit-Baltistan</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Actions: Save & Sign Out */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={savedSuccess}
                  className={`flex-1 py-2.5 px-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition cursor-pointer ${
                    savedSuccess
                      ? 'bg-emerald-700'
                      : 'bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-700/20'
                  }`}
                >
                  {savedSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Saved to Cloud!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Update Cloud Profile</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={submitting}
                  className="py-2.5 px-4 rounded-xl font-semibold text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900 transition flex items-center gap-1.5 cursor-pointer"
                  title="Sign out of Firebase"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* NOT LOGGED IN VIEW */
          <div className="p-5 sm:p-6">
            
            {/* Tabs: Sign In / Create Account */}
            {authMode !== 'forgot' && (
              <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 mb-5">
                <button
                  type="button"
                  id="tab-auth-signin"
                  onClick={() => {
                    setAuthMode('signin');
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition cursor-pointer ${
                    authMode === 'signin'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  id="tab-auth-signup"
                  onClick={() => {
                    setAuthMode('signup');
                    setErrorMessage(null);
                  }}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition cursor-pointer ${
                    authMode === 'signup'
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Create Account
                </button>
              </div>
            )}

            {/* Error Message Box */}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success Message Box */}
            {successMessage && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* Google Sign In Button */}
            {authMode !== 'forgot' && (
              <div className="mb-5">
                <button
                  type="button"
                  id="google-signin-btn"
                  onClick={handleGoogleSignIn}
                  disabled={submitting}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 font-semibold text-sm flex items-center justify-center gap-3 shadow-2xs transition cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  )}
                  <span>Continue with Google</span>
                </button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-white dark:bg-slate-900 px-2 text-slate-400 uppercase tracking-wider font-semibold">
                      or with email
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 1. SIGN IN FORM */}
            {authMode === 'signin' && (
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      id="signin-email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aspirant@gmail.com"
                      required
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('forgot');
                        setErrorMessage(null);
                      }}
                      className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="signin-password-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-9 pr-10 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  id="submit-signin-btn"
                  disabled={submitting}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50 mt-2"
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <span>Sign In & Sync Progress</span>
                  )}
                </button>
              </form>
            )}

            {/* 2. CREATE ACCOUNT FORM */}
            {authMode === 'signup' && (
              <form onSubmit={handleEmailSignup} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="signup-name-input"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Zohaib Ali / Fatima Shah"
                      required
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Target Exam
                    </label>
                    <select
                      value={targetExam}
                      onChange={(e) => setTargetExam(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden cursor-pointer"
                    >
                      {EXAMS_DATA.map((ex) => (
                        <option key={ex.id} value={`${ex.shortName} (${ex.conductedBy})`}>
                          {ex.shortName} ({ex.conductedBy})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Province
                    </label>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden cursor-pointer"
                    >
                      <option value="Sindh">Sindh</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Khyber Pakhtunkhwa">KPK</option>
                      <option value="Balochistan">Balochistan</option>
                      <option value="Islamabad / Federal">Islamabad</option>
                      <option value="Azad Kashmir & GB">AJK & GB</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      id="signup-email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aspirant@gmail.com"
                      required
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Password (Min 6 chars)
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="signup-password-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create secure password"
                      required
                      minLength={6}
                      className="w-full pl-9 pr-10 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  id="submit-signup-btn"
                  disabled={submitting}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50 mt-2"
                >
                  {submitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <span>Create Free Account & Sync</span>
                  )}
                </button>
              </form>
            )}

            {/* 3. FORGOT PASSWORD FORM */}
            {authMode === 'forgot' && (
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Reset Your Password</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Enter the email address registered with your MATB account and we'll send you a password reset link.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="aspirant@gmail.com"
                      required
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : 'Send Reset Email'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('signin');
                      setErrorMessage(null);
                    }}
                    className="py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Guest Mode reassurance */}
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Want to test first?{' '}
                <button
                  type="button"
                  onClick={() => setAuthModalOpen(false)}
                  className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  Continue Practicing as Guest
                </button>
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
                Guest progress is stored locally and will sync once you create or log into your account.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
