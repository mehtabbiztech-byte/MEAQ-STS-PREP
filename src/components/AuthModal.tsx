import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  User, 
  Target, 
  Flame, 
  Award, 
  Bookmark, 
  CheckCircle,
  HelpCircle,
  Clock,
  LogOut,
  Save
} from 'lucide-react';
import { EXAMS_DATA } from '../data/examsData';

export const AuthModal: React.FC = () => {
  const { 
    authModalOpen, 
    setAuthModalOpen, 
    userProfile, 
    updateTargetExam, 
    updateUserName,
    setTab
  } = useApp();

  const [editName, setEditName] = useState(userProfile.name);
  const [selectedExam, setSelectedExam] = useState(userProfile.targetExam);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!authModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editName.trim()) {
      updateUserName(editName.trim());
    }
    updateTargetExam(selectedExam);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setAuthModalOpen(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-emerald-800 to-teal-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/30 flex items-center justify-center border border-emerald-400/40 font-bold text-lg">
              {userProfile.name.charAt(0).toUpperCase() || 'A'}
            </div>
            <div>
              <h3 className="font-bold text-lg font-display">Aspirant Profile & Study Hub</h3>
              <p className="text-xs text-emerald-200">Track your daily progress & target examination</p>
            </div>
          </div>
          <button
            onClick={() => setAuthModalOpen(false)}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700/50 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="p-5 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 grid grid-cols-4 gap-2 text-center">
          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="flex justify-center text-amber-500 mb-1">
              <Flame className="w-5 h-5 fill-amber-500" />
            </div>
            <div className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
              {userProfile.streakDays}
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
              Days Streak
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div className="flex justify-center text-emerald-600 mb-1">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
              {userProfile.points}
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
              Study Points
            </div>
          </div>

          <button
            onClick={() => {
              setTab('bookmarks');
              setAuthModalOpen(false);
            }}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-emerald-500 transition cursor-pointer"
          >
            <div className="flex justify-center text-blue-500 mb-1">
              <Bookmark className="w-5 h-5" />
            </div>
            <div className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
              {userProfile.bookmarks.length}
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
              Bookmarks
            </div>
          </button>

          <button
            onClick={() => {
              setTab('mistakes');
              setAuthModalOpen(false);
            }}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-rose-500 transition cursor-pointer"
          >
            <div className="flex justify-center text-rose-500 mb-1">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
              {userProfile.mistakeIds.length}
            </div>
            <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
              Mistakes
            </div>
          </button>
        </div>

        {/* Profile Settings Form */}
        <form onSubmit={handleSave} className="p-5 space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Your Full Name / Aspirant Handle
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Enter your name"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
              Target Competitive Exam
            </label>
            <div className="relative">
              <Target className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-hidden cursor-pointer appearance-none"
              >
                {EXAMS_DATA.map((ex) => (
                  <option key={ex.id} value={`${ex.shortName} (${ex.conductedBy})`}>
                    {ex.shortName} — {ex.name} ({ex.conductedBy})
                  </option>
                ))}
              </select>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              We personalize your recommended MCQs, mock tests, and daily questions based on this choice.
            </p>
          </div>

          {/* Quick links to review */}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
            <button
              type="button"
              onClick={() => {
                setTab('mistakes');
                setAuthModalOpen(false);
              }}
              className="text-rose-600 dark:text-rose-400 font-semibold hover:underline flex items-center gap-1"
            >
              <span>Review Incorrect Answers Notebook ({userProfile.mistakeIds.length})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setTab('rankings');
                setAuthModalOpen(false);
              }}
              className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              View Leaderboard
            </button>
          </div>

          {/* Save Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={savedSuccess}
              className={`w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 transition cursor-pointer ${
                savedSuccess
                  ? 'bg-emerald-700'
                  : 'bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-700/20'
              }`}
            >
              {savedSuccess ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Preferences Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Aspirant Settings</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
