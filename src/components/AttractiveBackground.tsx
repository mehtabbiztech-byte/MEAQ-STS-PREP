import React from 'react';
import { useApp } from '../context/AppContext';
import { ThemeStyle } from '../types';
import { Palette, Check, Sparkles } from 'lucide-react';

export const THEME_OPTIONS: {
  id: ThemeStyle;
  name: string;
  badge: string;
  primaryColor: string;
  secondaryColor: string;
  accentGlow: string;
  tagline: string;
}[] = [
  {
    id: 'emerald',
    name: 'Emerald Crescent',
    badge: 'Official',
    primaryColor: '#059669',
    secondaryColor: '#0d9488',
    accentGlow: 'rgba(16, 185, 129, 0.22)',
    tagline: 'Pakistan Flag & Academic Excellence'
  },
  {
    id: 'sapphire',
    name: 'Midnight Sapphire',
    badge: 'Pro Dark',
    primaryColor: '#2563eb',
    secondaryColor: '#06b6d4',
    accentGlow: 'rgba(37, 99, 235, 0.25)',
    tagline: 'Deep Ocean & Electric High-Contrast'
  },
  {
    id: 'aurora',
    name: 'Royal Aurora',
    badge: 'Vibrant',
    primaryColor: '#7c3aed',
    secondaryColor: '#ec4899',
    accentGlow: 'rgba(124, 58, 237, 0.25)',
    tagline: 'Amethyst Velvet & Neon Radiance'
  },
  {
    id: 'sunset',
    name: 'Golden Sunset',
    badge: 'Warm',
    primaryColor: '#d97706',
    secondaryColor: '#e11d48',
    accentGlow: 'rgba(217, 119, 6, 0.22)',
    tagline: 'Warm Twilight & Radiant Amber'
  }
];

export const AttractiveBackground: React.FC = () => {
  const { themeStyle, darkMode } = useApp();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Dynamic Ambient Blur Spheres according to selected theme */}
      {themeStyle === 'emerald' && (
        <>
          {/* Top-left emerald nebula */}
          <div 
            className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full filter blur-[100px] opacity-40 dark:opacity-30 transition-all duration-1000 animate-pulse"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(5,150,105,0.45) 0%, rgba(13,148,136,0.2) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(20,184,166,0.1) 60%, transparent 80%)' 
            }}
          />
          {/* Top-right gold glow */}
          <div 
            className="absolute top-10 -right-28 w-[480px] h-[480px] rounded-full filter blur-[90px] opacity-35 dark:opacity-25 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(245,158,11,0.3) 0%, rgba(217,119,6,0.1) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.08) 60%, transparent 80%)' 
            }}
          />
          {/* Center-bottom teal anchor */}
          <div 
            className="absolute top-2/3 left-1/4 w-[600px] h-[400px] rounded-full filter blur-[110px] opacity-25 dark:opacity-20 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(15,118,110,0.35) 0%, transparent 70%)' 
                : 'radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)' 
            }}
          />
        </>
      )}

      {themeStyle === 'sapphire' && (
        <>
          <div 
            className="absolute -top-32 -left-20 w-[580px] h-[580px] rounded-full filter blur-[100px] opacity-45 dark:opacity-35 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(30,58,138,0.25) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(96,165,250,0.1) 60%, transparent 80%)' 
            }}
          />
          <div 
            className="absolute top-20 -right-24 w-[520px] h-[520px] rounded-full filter blur-[95px] opacity-40 dark:opacity-30 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(14,165,233,0.15) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)' 
            }}
          />
          <div 
            className="absolute top-1/2 left-1/3 w-[550px] h-[450px] rounded-full filter blur-[110px] opacity-30 dark:opacity-20 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' 
                : 'radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)' 
            }}
          />
        </>
      )}

      {themeStyle === 'aurora' && (
        <>
          <div 
            className="absolute -top-32 -left-20 w-[580px] h-[580px] rounded-full filter blur-[100px] opacity-45 dark:opacity-35 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(88,28,135,0.25) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(147,51,234,0.25) 0%, transparent 75%)' 
            }}
          />
          <div 
            className="absolute top-16 -right-20 w-[520px] h-[520px] rounded-full filter blur-[95px] opacity-40 dark:opacity-30 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(190,24,93,0.15) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)' 
            }}
          />
          <div 
            className="absolute top-2/3 left-1/4 w-[550px] h-[450px] rounded-full filter blur-[110px] opacity-30 dark:opacity-20 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(67,56,202,0.35) 0%, transparent 70%)' 
                : 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' 
            }}
          />
        </>
      )}

      {themeStyle === 'sunset' && (
        <>
          <div 
            className="absolute -top-32 -left-20 w-[580px] h-[580px] rounded-full filter blur-[100px] opacity-45 dark:opacity-35 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(217,119,6,0.45) 0%, rgba(180,83,9,0.2) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 75%)' 
            }}
          />
          <div 
            className="absolute top-16 -right-20 w-[520px] h-[520px] rounded-full filter blur-[95px] opacity-40 dark:opacity-30 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(225,29,72,0.38) 0%, rgba(159,18,57,0.15) 60%, transparent 80%)' 
                : 'radial-gradient(circle, rgba(251,113,133,0.2) 0%, transparent 70%)' 
            }}
          />
          <div 
            className="absolute top-2/3 left-1/4 w-[550px] h-[450px] rounded-full filter blur-[110px] opacity-30 dark:opacity-20 transition-all duration-1000"
            style={{ 
              background: darkMode 
                ? 'radial-gradient(circle, rgba(234,88,12,0.3) 0%, transparent 70%)' 
                : 'radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)' 
            }}
          />
        </>
      )}

      {/* Modern micro-dot matrix pattern for depth */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.055]"
        style={{
          backgroundImage: darkMode
            ? 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)'
            : 'radial-gradient(rgba(0, 0, 0, 0.35) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Subtle Islamic Geometric Star Pattern in bottom right */}
      <div className="absolute -bottom-16 -right-16 w-96 h-96 opacity-[0.025] dark:opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-emerald-500">
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

  return (
    <div className="relative inline-block text-left">
      <button
        id="theme-palette-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 transition-all cursor-pointer shadow-2xs"
        title="Change Background Theme"
        aria-label="Change Background Theme"
      >
        <Palette className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        <span className="hidden sm:inline">Theme</span>
        <span 
          className="w-2.5 h-2.5 rounded-full inline-block ring-1 ring-white/50"
          style={{
            backgroundColor: 
              themeStyle === 'emerald' ? '#059669' :
              themeStyle === 'sapphire' ? '#2563eb' :
              themeStyle === 'aurora' ? '#7c3aed' : '#d97706'
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

          {/* Theme Palette Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-black/40 p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Attractive Background Themes</span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Instant Preview
              </span>
            </div>

            <div className="space-y-1.5">
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
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg text-left transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-slate-50 dark:bg-slate-800/90 border-emerald-500/50 dark:border-emerald-500/50 shadow-2xs'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center shadow-xs ring-1 ring-black/5 dark:ring-white/10"
                        style={{
                          background: `linear-gradient(135deg, ${item.primaryColor}, ${item.secondaryColor})`
                        }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow-xs" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                          {item.tagline}
                        </p>
                      </div>
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
