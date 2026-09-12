import React from 'react';
import { useApp } from '../context/AppContext';
import { ThemeStyle } from '../types';
import { Palette, Check, Sparkles, Heart } from 'lucide-react';

export const THEME_OPTIONS: {
  id: ThemeStyle;
  name: string;
  badge: string;
  primaryColor: string;
  secondaryColor: string;
  accentGlow: string;
  tagline: string;
  lightBg: string;
  darkBg: string;
}[] = [
  {
    id: 'aurora',
    name: 'Royal Aurora',
    badge: 'Purple · Light Pink',
    primaryColor: '#9333ea',
    secondaryColor: '#ec4899',
    accentGlow: 'rgba(147, 51, 234, 0.35)',
    tagline: 'Amethyst Velvet & Radiant Light Pink',
    lightBg: 'radial-gradient(circle at 15% 15%, rgba(243, 232, 255, 0.85) 0%, transparent 65%), radial-gradient(circle at 85% 20%, rgba(252, 231, 243, 0.9) 0%, transparent 65%), radial-gradient(circle at 50% 60%, rgba(250, 232, 255, 0.65) 0%, transparent 70%), radial-gradient(circle at 80% 85%, rgba(253, 226, 243, 0.8) 0%, transparent 65%), #fdf7fc',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(88, 28, 135, 0.45) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(157, 23, 77, 0.35) 0%, transparent 65%), radial-gradient(circle at 50% 80%, rgba(76, 29, 149, 0.4) 0%, transparent 70%), #0d0414'
  },
  {
    id: 'rose',
    name: 'Blossom Rose',
    badge: 'Soft Pink',
    primaryColor: '#e11d48',
    secondaryColor: '#f472b6',
    accentGlow: 'rgba(225, 29, 72, 0.3)',
    tagline: 'Sakura Petals & Velvet Rose Glow',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(255, 228, 230, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(253, 232, 240, 0.85) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(254, 205, 211, 0.6) 0%, transparent 70%), #fff5f7',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(159, 18, 57, 0.45) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(190, 24, 93, 0.35) 0%, transparent 65%), #14030a'
  },
  {
    id: 'lavender',
    name: 'Lilac Dream',
    badge: 'Pastel Lavender',
    primaryColor: '#8b5cf6',
    secondaryColor: '#c084fc',
    accentGlow: 'rgba(139, 92, 246, 0.3)',
    tagline: 'Serene Lavender & Velvet Lilac Mist',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(237, 233, 254, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(245, 243, 255, 0.9) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(221, 214, 254, 0.6) 0%, transparent 70%), #faf8ff',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(76, 29, 149, 0.45) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(109, 40, 217, 0.35) 0%, transparent 65%), #0f071f'
  },
  {
    id: 'emerald',
    name: 'Emerald Crescent',
    badge: 'Official Green',
    primaryColor: '#059669',
    secondaryColor: '#0d9488',
    accentGlow: 'rgba(16, 185, 129, 0.25)',
    tagline: 'Pakistan Flag & Academic Excellence',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(209, 250, 229, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(204, 251, 241, 0.85) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(167, 243, 208, 0.5) 0%, transparent 70%), #f4fbf7',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(6, 78, 59, 0.5) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(19, 78, 74, 0.4) 0%, transparent 65%), #021a14'
  },
  {
    id: 'sapphire',
    name: 'Midnight Sapphire',
    badge: 'Ocean Blue',
    primaryColor: '#2563eb',
    secondaryColor: '#06b6d4',
    accentGlow: 'rgba(37, 99, 235, 0.25)',
    tagline: 'Deep Ocean & Electric Cyan High-Contrast',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(219, 234, 254, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(207, 250, 254, 0.85) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(191, 219, 254, 0.5) 0%, transparent 70%), #f4f8fe',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(30, 58, 138, 0.5) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(21, 94, 117, 0.4) 0%, transparent 65%), #051329'
  },
  {
    id: 'sunset',
    name: 'Golden Sunset',
    badge: 'Warm Amber',
    primaryColor: '#d97706',
    secondaryColor: '#e11d48',
    accentGlow: 'rgba(217, 119, 6, 0.25)',
    tagline: 'Warm Twilight & Radiant Amber Glow',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(254, 243, 199, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(255, 228, 230, 0.8) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(253, 230, 138, 0.5) 0%, transparent 70%), #fffaf2',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(120, 53, 15, 0.45) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(159, 18, 57, 0.35) 0%, transparent 65%), #1a0a03'
  },
  {
    id: 'cyber',
    name: 'Cyber Neon',
    badge: 'Electric Violet',
    primaryColor: '#a855f7',
    secondaryColor: '#06b6d4',
    accentGlow: 'rgba(168, 85, 247, 0.35)',
    tagline: 'High-Voltage Violet & Electric Cyan',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(243, 232, 255, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(207, 250, 254, 0.85) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(233, 213, 255, 0.5) 0%, transparent 70%), #faf6fe',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(107, 33, 168, 0.5) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(14, 116, 144, 0.4) 0%, transparent 65%), #0e021a'
  },
  {
    id: 'galaxy',
    name: 'Cosmic Galaxy',
    badge: 'Violet · Indigo',
    primaryColor: '#6366f1',
    secondaryColor: '#a855f7',
    accentGlow: 'rgba(99, 102, 241, 0.35)',
    tagline: 'Deep Space Violet & Starry Indigo Stardust',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(224, 231, 255, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(243, 232, 255, 0.9) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(238, 242, 255, 0.6) 0%, transparent 70%), #f8faff',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(49, 46, 129, 0.45) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(88, 28, 135, 0.35) 0%, transparent 65%), #08071a'
  },
  {
    id: 'ocean',
    name: 'Aegean Breeze',
    badge: 'Turquoise',
    primaryColor: '#0891b2',
    secondaryColor: '#0284c7',
    accentGlow: 'rgba(8, 145, 178, 0.3)',
    tagline: 'Mediterranean Azure & Gentle Sea Wave',
    lightBg: 'radial-gradient(circle at 20% 15%, rgba(207, 250, 254, 0.85) 0%, transparent 60%), radial-gradient(circle at 85% 25%, rgba(224, 242, 254, 0.85) 0%, transparent 60%), radial-gradient(circle at 50% 80%, rgba(165, 243, 252, 0.5) 0%, transparent 70%), #f3fcfd',
    darkBg: 'radial-gradient(circle at 20% 20%, rgba(19, 78, 74, 0.5) 0%, transparent 60%), radial-gradient(circle at 80% 30%, rgba(3, 105, 161, 0.4) 0%, transparent 65%), #03141c'
  }
];

export const AttractiveBackground: React.FC = () => {
  const { themeStyle, darkMode } = useApp();

  const currentTheme = THEME_OPTIONS.find((t) => t.id === themeStyle) || THEME_OPTIONS[0];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Full App Responsive Ambient Canvas Backdrop */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-in-out"
        style={{
          background: darkMode ? currentTheme.darkBg : currentTheme.lightBg
        }}
      />

      {/* Floating Vibrant Blur Spheres according to selected theme */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full filter blur-[110px] opacity-60 dark:opacity-40 transition-all duration-700 animate-pulse"
        style={{ 
          background: `radial-gradient(circle, ${currentTheme.primaryColor} 0%, transparent 70%)` 
        }}
      />

      <div 
        className="absolute top-16 -right-28 w-[550px] h-[550px] rounded-full filter blur-[100px] opacity-55 dark:opacity-35 transition-all duration-700"
        style={{ 
          background: `radial-gradient(circle, ${currentTheme.secondaryColor} 0%, transparent 70%)` 
        }}
      />

      <div 
        className="absolute top-2/3 left-1/4 w-[650px] h-[450px] rounded-full filter blur-[120px] opacity-45 dark:opacity-30 transition-all duration-700"
        style={{ 
          background: `radial-gradient(circle, ${currentTheme.primaryColor} 0%, ${currentTheme.secondaryColor} 50%, transparent 75%)` 
        }}
      />

      {/* Subtle micro-dot matrix pattern for depth */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: darkMode
            ? 'radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)'
            : 'radial-gradient(rgba(147, 51, 234, 0.35) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Subtle Star Crest in corner */}
      <div className="absolute -bottom-16 -right-16 w-96 h-96 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-purple-600 dark:text-pink-500">
          <polygon points="100,10 120,70 185,70 132,110 152,170 100,132 48,170 68,110 15,70 80,70" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
};

// Interactive Theme Switcher Floating Pill / Popover Component
export const ThemeSwitcherWidget: React.FC = () => {
  const { themeStyle, setThemeStyle } = useApp();
  const [isOpen, setIsOpen] = React.useState(false);

  const activeTheme = THEME_OPTIONS.find(t => t.id === themeStyle) || THEME_OPTIONS[0];

  return (
    <div className="relative inline-block text-left">
      <button
        id="theme-palette-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-purple-300/80 dark:border-slate-700 transition-all cursor-pointer shadow-2xs"
        title="Change App Theme & Background"
        aria-label="Change Background Theme"
      >
        <Palette className="w-4 h-4 text-purple-600 dark:text-pink-400" />
        <span className="hidden sm:inline font-bold">Theme</span>
        <span 
          className="w-3 h-3 rounded-full inline-block ring-1 ring-white/60 shadow-xs"
          style={{
            background: `linear-gradient(135deg, ${activeTheme.primaryColor}, ${activeTheme.secondaryColor})`
          }}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />

          {/* Theme Palette Dropdown Menu in Sequence 3 and 3 */}
          <div className="absolute right-0 mt-2 w-[320px] sm:w-[560px] md:w-[620px] max-w-[calc(100vw-1.5rem)] rounded-2xl bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border border-purple-200 dark:border-purple-900/50 shadow-2xl shadow-purple-950/20 p-3.5 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-purple-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900 dark:text-white">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-pink-400" />
                <span>Workable App Themes</span>
              </div>
              <span className="text-[10px] text-purple-600 dark:text-pink-400 font-bold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800">
                9 Live Palettes (3×3)
              </span>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 px-1 leading-snug">
              Instant background transformation across the entire platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 max-h-[420px] overflow-y-auto pr-1">
              {THEME_OPTIONS.map((item) => {
                const isSelected = themeStyle === item.id;
                return (
                  <button
                    key={item.id}
                    id={`theme-option-${item.id}`}
                    onClick={() => {
                      setThemeStyle(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-start gap-2.5 p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-purple-50/80 dark:bg-purple-950/50 border-purple-500 text-purple-950 dark:text-white shadow-sm ring-1 ring-purple-400/40'
                        : 'bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200/70 dark:border-slate-800'
                    }`}
                  >
                    <div 
                      className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center shadow-xs ring-2 ring-white/80 dark:ring-slate-900/80 mt-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${item.primaryColor}, ${item.secondaryColor})`
                      }}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white drop-shadow-xs" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                          {item.name}
                        </span>
                        {item.id === 'aurora' && (
                          <Heart className="w-3 h-3 text-pink-500 fill-pink-500 shrink-0" />
                        )}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 block truncate">
                        {item.badge}
                      </span>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
