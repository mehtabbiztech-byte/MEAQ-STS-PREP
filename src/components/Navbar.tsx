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
  Home,
  BookOpen,
  Trophy,
  FileText,
  Globe2,
  GraduationCap,
  Briefcase,
  BookMarked,
  Award,
  Info,
  ChevronRight,
  Check
} from 'lucide-react';
import { ThemeSwitcherWidget, THEME_OPTIONS } from './AttractiveBackground';

interface NavItemConfig {
  id: NavigationTab;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  badgeType?: 'live' | 'year' | 'alert';
  desc: string;
}

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
    updatePersona,
    setSelectedCategorySlug,
    setSelectedExamId
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItemConfig[] = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: <Home className="w-4 h-4 shrink-0" />,
      desc: 'Dashboard overview, daily question & study tools'
    },
    { 
      id: 'mcqs', 
      label: 'MCQs', 
      icon: <BookOpen className="w-4 h-4 shrink-0" />,
      desc: '50,000+ Subject-wise verified MCQs with detailed explanations'
    },
    { 
      id: 'quiz', 
      label: 'Quiz', 
      badge: 'LIVE', 
      badgeType: 'live',
      icon: <Trophy className="w-4 h-4 shrink-0" />,
      desc: 'Timed mock quizzes, negative marking & live Pakistan merit ranks'
    },
    { 
      id: 'past-papers', 
      label: 'Past Papers', 
      icon: <FileText className="w-4 h-4 shrink-0" />,
      desc: 'Official FPSC, SPSC, PPSC, STS solved & tagged past papers'
    },
    { 
      id: 'current-affairs', 
      label: 'Current Affairs', 
      badge: '2026', 
      badgeType: 'year',
      icon: <Globe2 className="w-4 h-4 shrink-0" />,
      desc: 'Monthly national & international roundups with quizzes'
    },
    { 
      id: 'exams', 
      label: 'Exams', 
      icon: <GraduationCap className="w-4 h-4 shrink-0" />,
      desc: 'CSS, PMS, SPSC CCE, FPSC syllabus, patterns & eligibility'
    },
    { 
      id: 'jobs', 
      label: 'Jobs', 
      badge: 'ALERTS', 
      badgeType: 'alert',
      icon: <Briefcase className="w-4 h-4 shrink-0" />,
      desc: 'Latest federal & provincial competitive job advertisements'
    },
    { 
      id: 'study-notes', 
      label: 'Study Notes', 
      icon: <BookMarked className="w-4 h-4 shrink-0" />,
      desc: 'High-yield revision summaries, timelines & formulas'
    },
    { 
      id: 'rankings', 
      label: 'Rankings', 
      icon: <Award className="w-4 h-4 shrink-0" />,
      desc: 'Pakistan-wide merit standings & top aspirant percentiles'
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: <Info className="w-4 h-4 shrink-0" />,
      desc: 'Platform mission, creator Mehtab Ali & methodology'
    },
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

  const openKids = () => {
    updatePersona('kids');
    setTab('home');
    setMobileMenuOpen(false);
    window.setTimeout(() => document.getElementById('kids-hub')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 70);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full max-w-full overflow-x-clip border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors shadow-xs">
        
        {/* Top Micro-Bar: Announcements & Exam Target (Responsive & safely constrained) */}
        <div className="bg-purple-950 text-purple-100 text-xs py-1.5 px-3 sm:px-4 hidden sm:block border-b border-purple-900/40 w-full max-w-full overflow-hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-hidden">
            <div className="flex items-center gap-2 truncate min-w-0">
              <span className="inline-flex items-center gap-1 font-semibold text-pink-300 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Targeting:
              </span>
              <button 
                onClick={() => setAuthModalOpen(true)} 
                className="text-purple-200 hover:text-white underline decoration-pink-500 font-medium cursor-pointer truncate"
              >
                {userProfile.targetExam || 'Set Target Exam'}
              </button>
              <span className="text-purple-500 mx-1 hidden md:inline">•</span>
              <span className="text-purple-200/80 hidden md:inline truncate">
                50,000+ Verified MCQs for FPSC, SPSC, PPSC, STS & CSS
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 text-pink-200">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Streak: <strong className="text-white">{userProfile.streakDays}d</strong></span>
              </div>
              <span className="text-purple-700">|</span>
              <div className="text-purple-200">
                Score: <strong className="text-white">{userProfile.points} pts</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Row 1: Brand Logo, Global Search & Quick Actions */}
        <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 w-full max-w-full">
          <div className="flex items-center justify-between h-15 sm:h-16 gap-1.5 sm:gap-4 w-full">
            
            {/* Logo & Brand */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
              <button
                id="brand-logo-btn"
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 sm:gap-2.5 text-left group cursor-pointer focus:outline-hidden"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-600 via-fuchsia-700 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-900/30 ring-2 ring-purple-400/30 group-hover:scale-105 transition-transform shrink-0">
                  <BookOpenCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <span className="font-extrabold text-base sm:text-xl tracking-tight text-slate-900 dark:text-white font-display block whitespace-nowrap">
                    MATB <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">STS PREP</span>
                  </span>
                  <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-semibold hidden md:block whitespace-nowrap">
                    By Mehtab Ali • Practice Smart
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-sm xl:max-w-md mx-3">
              <button
                id="desktop-search-trigger"
                onClick={() => setSearchOpen(true)}
                className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-800/80 hover:bg-purple-50/50 dark:hover:bg-slate-800 border border-purple-200/80 dark:border-slate-700 rounded-xl transition cursor-pointer shadow-2xs"
              >
                <span className="flex items-center gap-2 truncate">
                  <Search className="w-4 h-4 text-purple-600 dark:text-pink-400 shrink-0" />
                  <span className="truncate">Search MCQs, exams, topics...</span>
                </span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-semibold text-purple-600 dark:text-pink-300 bg-purple-50 dark:bg-slate-900 border border-purple-200 dark:border-slate-700 rounded-sm shadow-2xs shrink-0">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Right Action Icons (Optimized for zero overflow on mobile screens) */}
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <button onClick={openKids} aria-label="Open Kids learning, art and games" className="shrink-0 inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-100 px-2 sm:px-3 py-2 text-xs font-extrabold text-sky-900 hover:bg-sky-200"><span aria-hidden="true">🫧</span><span className="hidden sm:inline">Kids</span></button>
              
              {/* Search Icon Trigger on mobile/tablet */}
              <button
                id="mobile-search-btn"
                onClick={() => setSearchOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Search MCQs"
                aria-label="Search"
              >
                <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-200" />
              </button>

              {/* Saved Bookmarks Shortcut */}
              <button
                id="nav-bookmarks-btn"
                onClick={() => setTab('bookmarks')}
                className={`p-2 rounded-lg transition relative cursor-pointer ${
                  tab === 'bookmarks'
                    ? 'text-purple-600 bg-purple-50 dark:bg-purple-950/60'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-purple-50/80 dark:hover:bg-slate-800'
                }`}
                title="Saved Bookmarks"
                aria-label="Bookmarks"
              >
                <Bookmark className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                {userProfile.bookmarks.length > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-[10px] font-bold text-white shadow-xs">
                    {userProfile.bookmarks.length}
                  </span>
                )}
              </button>

              {/* Theme Palette Switcher */}
              <ThemeSwitcherWidget />

              {/* Dark / Light Toggle */}
              <button
                id="theme-toggle-btn"
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800 transition cursor-pointer"
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Theme"
              >
                {darkMode ? (
                  <Sun className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-400" />
                ) : (
                  <Moon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-slate-700" />
                )}
              </button>

              {/* User Account / Profile */}
              <button
                id="auth-profile-btn"
                onClick={() => setAuthModalOpen(true)}
                className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:pl-2.5 sm:pr-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition cursor-pointer shadow-2xs ${
                  user 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white' 
                    : 'bg-white/90 dark:bg-slate-800 text-purple-700 dark:text-pink-300 border border-purple-400/50 hover:bg-purple-50 dark:hover:bg-slate-750'
                }`}
                title={user ? `Signed in as ${user.email || user.displayName}` : 'Guest Mode - Click to Sign In'}
              >
                {user ? (
                  user.photoURL ? (
                    <img src={user.photoURL} alt="" className="w-4.5 h-4.5 rounded-full object-cover border border-purple-200" />
                  ) : (
                    <span className="w-4.5 h-4.5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center text-[10px] font-bold">
                      {userProfile.name.charAt(0).toUpperCase() || 'A'}
                    </span>
                  )
                ) : (
                  <User className="w-4 h-4 text-purple-600 dark:text-pink-400 shrink-0" />
                )}

                <span className="hidden sm:inline-block max-w-[85px] truncate font-bold">
                  {user ? userProfile.name : 'Sign In'}
                </span>

                {user && (
                  <span className="hidden sm:flex h-2 w-2 relative">
                    {isSyncing && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    )}
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
                  </span>
                )}
              </button>

              {/* Mobile Menu Drawer Toggle Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 bg-purple-50/70 hover:bg-purple-100 dark:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer ml-0.5"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-rose-500" /> : <Menu className="w-5 h-5 text-purple-600 dark:text-pink-400" />}
              </button>

            </div>

          </div>
        </div>

        {/* Row 2: Official Navigation Header Buttons Bar (Desktop & Mobile Swipe Strip) */}
        <nav 
          id="official-headers-navigation" 
          aria-label="Official Portal Navigation"
          className="w-full border-t border-purple-100 dark:border-purple-950/40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-2 px-2.5 sm:px-6 lg:px-8 shadow-xs overflow-hidden"
        >
          <div className="max-w-7xl mx-auto w-full">
            {/* Scrollable container with no scrollbars; smooth horizontal touch pan without spilling to body */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-2.5 overflow-x-auto no-scrollbar scroll-smooth py-0.5 w-full max-w-full touch-pan-x justify-start lg:justify-between">
              {navItems.map((item) => {
                const isActive = tab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`official-header-btn-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 lg:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shrink-0 cursor-pointer select-none whitespace-nowrap ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600 text-white font-extrabold shadow-md shadow-purple-900/30 ring-2 ring-purple-400/50 border border-purple-300/40'
                        : 'bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50/80 dark:hover:bg-purple-950/40 border border-slate-200/90 dark:border-slate-700 hover:border-purple-400/80 shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    {/* Official Icon */}
                    <span className={`transition-colors ${
                      isActive 
                        ? 'text-white' 
                        : 'text-purple-600 dark:text-pink-400 group-hover:scale-110'
                    }`}>
                      {item.icon}
                    </span>

                    {/* Bold Official Label */}
                    <span className={`font-bold font-display tracking-tight sm:tracking-normal ${
                      isActive ? 'text-white font-extrabold' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {item.label}
                    </span>

                    {/* Official Live / Year / Alert Badges */}
                    {item.badge && (
                      <span className={`text-[10px] font-black uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-1 transition-all ${
                        item.badgeType === 'live'
                          ? isActive 
                            ? 'bg-white/25 text-white' 
                            : 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300 border border-pink-300 dark:border-pink-700'
                          : item.badgeType === 'year'
                          ? isActive
                            ? 'bg-amber-400 text-slate-950 shadow-xs'
                            : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                          : isActive
                          ? 'bg-white text-rose-700 font-black'
                          : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border border-rose-300 dark:border-rose-700'
                      }`}>
                        {item.badgeType === 'live' && (
                          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-pink-500 animate-ping'} inline-block`} />
                        )}
                        {item.badge}
                      </span>
                    )}

                    {/* Active Bottom Glow Accent */}
                    {isActive && (
                      <span className="absolute -bottom-[1px] left-3 right-3 h-[2px] bg-white/70 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Mobile View Navigation Drawer / Modal (Opens when Hamburger is clicked) */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation-drawer"
            className="fixed inset-x-0 top-full max-h-[85vh] overflow-y-auto bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl z-50 animate-in fade-in slide-in-from-top-3 duration-200 w-full max-w-full"
          >
            <div className="max-w-xl mx-auto p-4 space-y-4">
              
              {/* Drawer Header with Title and Close Button */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs">
                    <BookOpenCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">
                      Official Portal Navigation
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      All sections with instant one-tap access
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Quick Search Input */}
              <div>
                <button
                  onClick={() => {
                    setSearchOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-left"
                >
                  <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">Search 50,000+ MCQs, exams, past papers...</span>
                </button>
              </div>

              {/* Official Mobile Headers as Bold Buttons with Space & Official Theme */}
              <div className="space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-1">
                  Examination Headers & Sections
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {navItems.map((item) => {
                    const isActive = tab === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`mobile-drawer-btn-${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold border-emerald-500 shadow-md shadow-emerald-900/20 ring-1 ring-emerald-400/50'
                            : 'bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700 hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`p-2 rounded-lg shrink-0 ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-2xs'
                          }`}>
                            {item.icon}
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-extrabold text-sm tracking-tight truncate font-display">
                                {item.label}
                              </span>
                              {item.badge && (
                                <span className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full ${
                                  isActive
                                    ? 'bg-white text-emerald-800'
                                    : item.badgeType === 'live'
                                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-300'
                                    : item.badgeType === 'year'
                                    ? 'bg-teal-100 text-teal-800 dark:bg-teal-900/80 dark:text-teal-300'
                                    : 'bg-rose-100 text-rose-700 dark:bg-rose-900/80 dark:text-rose-300'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className={`text-[11px] truncate mt-0.5 ${
                              isActive ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'
                            }`}>
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {isActive ? (
                          <Check className="w-4 h-4 text-white shrink-0 ml-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Quick Extras: Mistakes, Bookmarks, Theme */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 px-1">
                  <div className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Goal: <strong className="text-slate-800 dark:text-slate-200">{userProfile.targetExam || 'General'}</strong></span>
                  </div>
                  <button
                    onClick={() => {
                      setTab('mistakes');
                      setMobileMenuOpen(false);
                    }}
                    className="text-rose-600 dark:text-rose-400 font-bold hover:underline cursor-pointer"
                  >
                    Mistake Bank ({userProfile.mistakeIds.length})
                  </button>
                </div>

                {/* Theme Switcher Options in Mobile Menu */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-purple-600 dark:text-pink-400" />
                      Visual Theme:
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold capitalize">
                      {themeStyle} Mode
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {THEME_OPTIONS.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setThemeStyle(item.id)}
                        className={`flex items-center gap-2 p-2 rounded-lg text-xs font-semibold border text-left transition cursor-pointer ${
                          themeStyle === item.id
                            ? 'bg-purple-50 dark:bg-purple-950/60 border-purple-500 text-purple-700 dark:text-purple-300 font-bold shadow-2xs'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
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
              </div>

            </div>
          </div>
        )}

      </header>

      {/* Mobile Sticky Bottom Navigation Bar (Ultra-Convenient One-Thumb Navigation) */}
      <div 
        id="mobile-bottom-navigation-bar" 
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-purple-100 dark:border-slate-800 shadow-2xl py-1.5 px-3 flex items-center justify-around w-full max-w-full overflow-hidden"
      >
        <button
          id="mobile-bottom-home"
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-lg text-xs font-bold transition cursor-pointer ${
            tab === 'home'
              ? 'text-purple-600 dark:text-pink-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button
          id="mobile-bottom-mcqs"
          onClick={() => handleNavClick('mcqs')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-lg text-xs font-bold transition cursor-pointer ${
            tab === 'mcqs'
              ? 'text-purple-600 dark:text-pink-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-bold">MCQs</span>
        </button>

        <button
          id="mobile-bottom-quiz"
          onClick={() => handleNavClick('quiz')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-lg text-xs font-bold transition cursor-pointer relative ${
            tab === 'quiz'
              ? 'text-purple-600 dark:text-pink-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <div className="relative">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span className="absolute -top-1 -right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
          </div>
          <span className="text-[10px] font-bold">Quiz</span>
        </button>

        <button
          id="mobile-bottom-papers"
          onClick={() => handleNavClick('past-papers')}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-lg text-xs font-bold transition cursor-pointer ${
            tab === 'past-papers'
              ? 'text-purple-600 dark:text-pink-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-bold">Papers</span>
        </button>

        <button
          id="mobile-bottom-menu"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`flex flex-col items-center gap-0.5 p-1 rounded-lg text-xs font-bold transition cursor-pointer ${
            mobileMenuOpen
              ? 'text-purple-600 dark:text-pink-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <Menu className="w-5 h-5" />
          <span className="text-[10px] font-bold">All Menu</span>
        </button>
      </div>
    </>
  );
};
