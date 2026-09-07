import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NavigationTab } from '../types';
import { 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Bookmark, 
  User, 
  Flame, 
  Sparkles,
  BookOpenCheck,
  Palette,
  Cloud,
  Loader2,
  LogIn
} from 'lucide-react';
import { ThemeSwitcherWidget, THEME_OPTIONS } from './AttractiveBackground';

export const Navbar: React.FC = () => {
  const { 
    tab, 
    setTab, 
    darkMode, 
    toggleDarkMode, 
    themeStyle,
    setThemeStyle,
    setSearchOpen, 
    setAuthModalOpen,
    user,
    isSyncing,
    userProfile,
    setSelectedCategorySlug,
    setSelectedExamId
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string; icon?: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'mcqs', label: 'MCQs' },
    { id: 'quiz', label: 'Quiz', badge: 'Live' },
    { id: 'past-papers', label: 'Past Papers' },
    { id: 'current-affairs', label: 'Current Affairs', badge: '2026' },
    { id: 'exams', label: 'Exams' },
    { id: 'jobs', label: 'Jobs', badge: 'Alerts' },
    { id: 'study-notes', label: 'Study Notes' },
    { id: 'rankings', label: 'Rankings' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (navId: NavigationTab) => {
    if (navId === 'mcqs') {
      setSelectedCategorySlug(null);
    }
    if (navId === 'exams') {
      setSelectedExamId(null);
    }
    setTab(navId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors shadow-xs">
      {/* Top micro-bar for quick announcements / target exam */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-1.5 px-4 hidden sm:block border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Targeting:
            </span>
            <button 
              onClick={() => setAuthModalOpen(true)} 
              className="text-emerald-200 hover:text-white underline decoration-emerald-500 font-medium cursor-pointer"
            >
              {userProfile.targetExam || 'Set Target Exam'}
            </button>
            <span className="text-emerald-500 mx-1">•</span>
            <span className="text-emerald-300">Over 50,000+ Verified MCQs for FPSC, SPSC, PPSC, STS & CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Streak: <strong className="text-white">{userProfile.streakDays} Days</strong></span>
            </div>
            <span className="text-emerald-600">|</span>
            <div className="text-emerald-300">
              Score: <strong className="text-white">{userProfile.points} pts</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 ring-2 ring-emerald-500/30 group-hover:scale-105 transition-transform">
                <BookOpenCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white font-display">
                    MATB <span className="text-emerald-600 dark:text-emerald-400">STS PREP</span>
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-semibold hidden md:block">
                  By Mehtab Ali • Practice Smart
                </p>
              </div>
            </button>
          </div>

          {/* Search Trigger on Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xs xl:max-w-sm mx-2">
            <button
              id="desktop-search-trigger"
              onClick={() => setSearchOpen(true)}
              className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-lg transition cursor-pointer"
            >
              <span className="flex items-center gap-2 truncate">
                <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Search MCQs, exams, topics...</span>
              </span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-sm shadow-2xs">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = tab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 rounded-md transition relative flex items-center gap-1 cursor-pointer ${
                    isActive
                      ? 'text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-50 dark:bg-emerald-950/60'
                      : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[10px] font-bold uppercase rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-600 dark:bg-emerald-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons (Right) */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search Icon button on mobile / tablet */}
            <button
              id="mobile-search-btn"
              onClick={() => setSearchOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title="Search MCQs"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </button>

            {/* Bookmarks Quick Link */}
            <button
              id="nav-bookmarks-btn"
              onClick={() => setTab('bookmarks')}
              className={`p-2 rounded-lg transition relative cursor-pointer ${
                tab === 'bookmarks'
                  ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Saved Bookmarked MCQs"
              aria-label="Bookmarks"
            >
              <Bookmark className="w-5 h-5" />
              {userProfile.bookmarks.length > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                  {userProfile.bookmarks.length}
                </span>
              )}
            </button>

            {/* Theme Selector Widget */}
            <ThemeSwitcherWidget />

            {/* Dark / Light Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* User Account / Profile */}
            <button
              id="auth-profile-btn"
              onClick={() => setAuthModalOpen(true)}
              className={`flex items-center gap-2 pl-2.5 pr-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition cursor-pointer shadow-2xs ${
                user 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                  : 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 hover:bg-emerald-50 dark:hover:bg-slate-750'
              }`}
              title={user ? `Signed in as ${user.email || user.displayName}` : 'Guest Mode - Click to Sign In & Sync'}
            >
              {user ? (
                user.photoURL ? (
                  <img src={user.photoURL} alt="" className="w-5 h-5 rounded-full object-cover border border-emerald-200" />
                ) : (
                  <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
                    {userProfile.name.charAt(0).toUpperCase() || 'A'}
                  </span>
                )
              ) : (
                <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              )}

              <span className="hidden sm:inline-block max-w-[95px] truncate font-medium">
                {user ? userProfile.name : 'Sign In'}
              </span>

              {user && (
                <span className="flex h-2 w-2 relative">
                  {isSyncing && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  )}
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="xl:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer ml-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="mb-3">
            <button
              onClick={() => {
                setSearchOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-left"
            >
              <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Search 50,000+ MCQs & Past Papers...</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navItems.map((item) => {
              const isActive = tab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition text-left cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-emerald-800 text-emerald-100' : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Theme Switcher */}
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-emerald-500" />
                Background Theme
              </span>
              <span className="text-[10px] text-slate-400 capitalize">
                {themeStyle} Mode
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {THEME_OPTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setThemeStyle(item.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs font-medium border text-left transition ${
                    themeStyle === item.id
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span 
                    className="w-3 h-3 rounded-full shrink-0" 
                    style={{ background: item.primaryColor }}
                  />
                  <span className="truncate">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Target: <strong className="text-slate-800 dark:text-slate-200">{userProfile.targetExam}</strong></span>
            </div>
            <button
              onClick={() => {
                setTab('mistakes');
                setMobileMenuOpen(false);
              }}
              className="text-rose-600 dark:text-rose-400 font-medium hover:underline"
            >
              Mistake Book ({userProfile.mistakeIds.length})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
