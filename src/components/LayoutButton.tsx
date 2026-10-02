import React from 'react';
import { Layout, Columns, Sidebar, Maximize2 } from 'lucide-react';
import { useLayout } from '../context/LayoutContext';

interface LayoutButtonProps {
  variant?: 'navbar' | 'compact' | 'pill' | 'sidebar';
  className?: string;
}

export const LayoutButton: React.FC<LayoutButtonProps> = ({ variant = 'navbar', className = '' }) => {
  const { shellLayout, setLayoutModalOpen } = useLayout();

  const getLayoutIcon = () => {
    switch (shellLayout) {
      case 'sidebar':
        return <Sidebar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'split':
        return <Columns className="w-4 h-4 text-blue-600 dark:text-blue-400" />;
      case 'zen':
        return <Maximize2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case 'standard':
      default:
        return <Layout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const getLayoutLabel = () => {
    switch (shellLayout) {
      case 'sidebar':
        return 'Sidebar';
      case 'split':
        return 'Split';
      case 'zen':
        return 'Zen Focus';
      case 'standard':
      default:
        return 'Layout';
    }
  };

  if (variant === 'compact') {
    return (
      <button
        onClick={() => setLayoutModalOpen(true)}
        className={`p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition shadow-xs cursor-pointer ${className}`}
        title="Customize Layout & Display"
        aria-label="Customize Layout"
      >
        {getLayoutIcon()}
      </button>
    );
  }

  if (variant === 'sidebar') {
    return (
      <button
        onClick={() => setLayoutModalOpen(true)}
        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer ${className}`}
      >
        <div className="flex items-center gap-2">
          {getLayoutIcon()}
          <span>Layout Mode</span>
        </div>
        <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-black uppercase">
          {getLayoutLabel()}
        </span>
      </button>
    );
  }

  // Default navbar pill button
  return (
    <button
      id="nav-layout-switcher-btn"
      onClick={() => setLayoutModalOpen(true)}
      className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 transition shadow-xs cursor-pointer text-xs font-bold ${className}`}
      title="Switch Layout: Standard, Executive Sidebar, Split Workspace or Zen Focus"
      aria-label="Switch Layout"
    >
      {getLayoutIcon()}
      <span className="hidden md:inline">{getLayoutLabel()}</span>
      <span className="px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-[9px] font-black text-slate-600 dark:text-slate-300 uppercase">
        📐
      </span>
    </button>
  );
};
