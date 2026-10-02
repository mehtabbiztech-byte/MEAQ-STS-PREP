import React from 'react';
import { 
  X, 
  Layout, 
  Columns, 
  Sidebar as SidebarIcon, 
  Maximize2, 
  Sliders, 
  Check, 
  Type, 
  Smartphone, 
  Monitor, 
  Sparkles,
  Zap,
  RotateCcw
} from 'lucide-react';
import { useLayout, ShellLayout, ContainerWidth, ContentDensity, FontSizeScale } from '../context/LayoutContext';

interface LayoutWireframeProps {
  layout: ShellLayout;
  isActive: boolean;
}

const LayoutWireframe: React.FC<LayoutWireframeProps> = ({ layout, isActive }) => {
  const activeBorder = isActive ? 'border-emerald-500 ring-2 ring-emerald-500/40' : 'border-slate-200 dark:border-slate-700';

  if (layout === 'standard') {
    return (
      <div className={`w-full h-24 rounded-xl border bg-slate-50 dark:bg-slate-900/60 p-1.5 flex flex-col gap-1 transition ${activeBorder}`}>
        {/* Top Navbar */}
        <div className="h-3.5 rounded-md bg-emerald-500/80 flex items-center justify-between px-2">
          <div className="w-10 h-1.5 rounded-sm bg-white/90" />
          <div className="flex gap-1">
            <div className="w-4 h-1.5 rounded-xs bg-white/70" />
            <div className="w-4 h-1.5 rounded-xs bg-white/70" />
            <div className="w-4 h-1.5 rounded-xs bg-white/70" />
          </div>
        </div>
        {/* Hero banner */}
        <div className="h-4 rounded-md bg-emerald-100 dark:bg-emerald-950/60 flex items-center px-2">
          <div className="w-16 h-1.5 rounded-sm bg-emerald-600/60 dark:bg-emerald-400/60" />
        </div>
        {/* Content grid */}
        <div className="flex-1 grid grid-cols-3 gap-1">
          <div className="rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60" />
          <div className="rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60" />
          <div className="rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60" />
        </div>
      </div>
    );
  }

  if (layout === 'sidebar') {
    return (
      <div className={`w-full h-24 rounded-xl border bg-slate-50 dark:bg-slate-900/60 p-1.5 flex gap-1 transition ${activeBorder}`}>
        {/* Left Sidebar */}
        <div className="w-10 rounded-md bg-emerald-700 dark:bg-emerald-900/90 flex flex-col p-1 gap-1">
          <div className="w-6 h-2 rounded-xs bg-white/90" />
          <div className="w-full h-1.5 rounded-xs bg-emerald-300/40" />
          <div className="w-full h-1.5 rounded-xs bg-emerald-300/40" />
          <div className="w-full h-1.5 rounded-xs bg-emerald-300/40" />
          <div className="mt-auto w-4 h-1.5 rounded-xs bg-emerald-300/60" />
        </div>
        {/* Right workspace */}
        <div className="flex-1 flex flex-col gap-1">
          {/* Top breadcrumb bar */}
          <div className="h-3 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between px-1.5">
            <div className="w-12 h-1.5 rounded-xs bg-slate-300 dark:bg-slate-600" />
            <div className="w-4 h-1.5 rounded-xs bg-emerald-500/60" />
          </div>
          {/* Main Content Area */}
          <div className="flex-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 flex flex-col gap-1">
            <div className="w-20 h-2 rounded-xs bg-slate-300 dark:bg-slate-600" />
            <div className="grid grid-cols-2 gap-1 flex-1">
              <div className="rounded-xs bg-slate-100 dark:bg-slate-700/60" />
              <div className="rounded-xs bg-slate-100 dark:bg-slate-700/60" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (layout === 'split') {
    return (
      <div className={`w-full h-24 rounded-xl border bg-slate-50 dark:bg-slate-900/60 p-1.5 flex flex-col gap-1 transition ${activeBorder}`}>
        {/* Top Mini Header */}
        <div className="h-3 rounded-md bg-emerald-600 dark:bg-emerald-800 flex items-center px-1.5">
          <div className="w-12 h-1 rounded-xs bg-white/90" />
        </div>
        {/* Master Detail Split */}
        <div className="flex-1 flex gap-1">
          {/* Master list / syllabus */}
          <div className="w-1/3 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 flex flex-col gap-1">
            <div className="w-full h-1.5 rounded-xs bg-emerald-500/50" />
            <div className="w-full h-1.5 rounded-xs bg-slate-200 dark:bg-slate-700" />
            <div className="w-full h-1.5 rounded-xs bg-slate-200 dark:bg-slate-700" />
            <div className="w-full h-1.5 rounded-xs bg-slate-200 dark:bg-slate-700" />
          </div>
          {/* Detail Reading Pane */}
          <div className="flex-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 flex flex-col gap-1">
            <div className="w-24 h-2 rounded-xs bg-slate-400 dark:bg-slate-500" />
            <div className="w-full h-1.5 rounded-xs bg-slate-200 dark:bg-slate-700" />
            <div className="w-3/4 h-1.5 rounded-xs bg-slate-200 dark:bg-slate-700" />
            <div className="mt-auto h-3 rounded-xs bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800/60" />
          </div>
        </div>
      </div>
    );
  }

  // Zen / Focus layout wireframe
  return (
    <div className={`w-full h-24 rounded-xl border bg-slate-900 dark:bg-slate-950 p-1.5 flex flex-col justify-between transition ${activeBorder}`}>
      <div className="w-16 h-1.5 rounded-xs bg-slate-700 mx-auto mt-1" />
      <div className="w-3/4 h-3 rounded-md bg-slate-800 mx-auto" />
      <div className="w-1/2 h-2 rounded-xs bg-slate-700 mx-auto" />
      {/* Floating Bottom Bar */}
      <div className="w-28 h-3 rounded-full bg-emerald-500/90 shadow-md mx-auto mb-1 flex items-center justify-around px-2">
        <div className="w-2 h-1 rounded-full bg-white" />
        <div className="w-4 h-1 rounded-full bg-white" />
        <div className="w-2 h-1 rounded-full bg-white" />
      </div>
    </div>
  );
};

export const LayoutSwitcherModal: React.FC = () => {
  const { 
    shellLayout, 
    setShellLayout, 
    containerWidth, 
    setContainerWidth, 
    contentDensity, 
    setContentDensity, 
    fontSize, 
    setFontSize,
    layoutModalOpen, 
    setLayoutModalOpen 
  } = useLayout();

  if (!layoutModalOpen) return null;

  const shellLayouts: { id: ShellLayout; title: string; subtitle: string; tag: string }[] = [
    {
      id: 'standard',
      title: 'Standard Top Nav',
      subtitle: 'Classic government testing portal layout with sticky top header and news ticker.',
      tag: 'Classic Standard'
    },
    {
      id: 'sidebar',
      title: 'Executive Sidebar',
      subtitle: 'Modern LMS & workspace layout with collapsible left navigation rail and top breadcrumbs.',
      tag: 'Advanced SaaS'
    },
    {
      id: 'split',
      title: 'Dual Split Workspace',
      subtitle: 'Master-detail view with persistent syllabus index on left and reading canvas on right.',
      tag: 'Research & Study'
    },
    {
      id: 'zen',
      title: 'Zen Focus Mode',
      subtitle: 'Distraction-free exam hall immersion with clean viewport and floating glass bottom dock.',
      tag: 'Exam Immersion'
    }
  ];

  const widths: { id: ContainerWidth; label: string; desc: string }[] = [
    { id: 'standard', label: 'Standard', desc: '1280px (Optimal reading)' },
    { id: 'wide', label: 'Widescreen', desc: '1536px (Spacious multi-col)' },
    { id: 'fluid', label: 'Full Width', desc: '100% Fluid (Edge-to-edge)' }
  ];

  const densities: { id: ContentDensity; label: string; desc: string }[] = [
    { id: 'comfortable', label: 'Comfortable', desc: 'Generous padding & larger touch targets' },
    { id: 'standard', label: 'Standard', desc: 'Balanced spacing for desktop & mobile' },
    { id: 'compact', label: 'Compact', desc: 'High density for rapid test solving & scanning' }
  ];

  const fontScales: { id: FontSizeScale; label: string; preview: string }[] = [
    { id: 'normal', label: 'Standard (100%)', preview: 'Text sample: STS IBA Sindh BPS 5–15' },
    { id: 'large', label: 'Large (112%)', preview: 'Text sample: STS IBA Sindh BPS 5–15' },
    { id: 'xlarge', label: 'Extra Large (125%)', preview: 'Text sample: STS IBA Sindh BPS 5–15' }
  ];

  const applyPreset = (preset: 'classic' | 'pro' | 'exam') => {
    if (preset === 'classic') {
      setShellLayout('standard');
      setContainerWidth('standard');
      setContentDensity('standard');
      setFontSize('normal');
    } else if (preset === 'pro') {
      setShellLayout('sidebar');
      setContainerWidth('wide');
      setContentDensity('comfortable');
      setFontSize('normal');
    } else if (preset === 'exam') {
      setShellLayout('zen');
      setContainerWidth('standard');
      setContentDensity('compact');
      setFontSize('large');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="layout-modal-title"
    >
      <div 
        className="fixed inset-0" 
        onClick={() => setLayoutModalOpen(false)} 
      />

      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border-2 border-emerald-500/40 shadow-2xl shadow-slate-950/60 p-5 sm:p-7 text-slate-900 dark:text-slate-100 z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-900/30">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="layout-modal-title" className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-display">
                  Display &amp; Layout Architecture
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-black uppercase">
                  Standard &amp; Advanced
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Customize your workspace layout, viewport width, information density, and typography scaling.
              </p>
            </div>
          </div>

          <button
            onClick={() => setLayoutModalOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close layout settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Presets Bar */}
        <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Recommended Layout Presets:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => applyPreset('classic')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer"
            >
              🏛️ Standard Portal
            </button>
            <button
              onClick={() => applyPreset('pro')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer"
            >
              📊 Executive Dashboard
            </button>
            <button
              onClick={() => applyPreset('exam')}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer"
            >
              🧘 Zen Exam Hall
            </button>
          </div>
        </div>

        {/* Section 1: Shell Layout Architecture */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <SidebarIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              1. Application Shell Layout
            </h3>
            <span className="text-xs text-slate-500">Choose primary workspace frame</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {shellLayouts.map((item) => {
              const isSelected = shellLayout === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setShellLayout(item.id)}
                  className={`group relative text-left rounded-2xl p-3.5 border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 shadow-md shadow-emerald-900/10 ring-2 ring-emerald-500/30'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Live Wireframe */}
                    <div className="mb-3">
                      <LayoutWireframe layout={item.id} isActive={isSelected} />
                    </div>

                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {item.tag}
                      </span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Width & Density Controls */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          
          {/* Container Width */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Columns className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                2. Container Max Width
              </h3>
              <span className="text-xs text-slate-500">Screen real estate</span>
            </div>

            <div className="space-y-2">
              {widths.map((w) => {
                const isSelected = containerWidth === w.id;
                return (
                  <button
                    key={w.id}
                    onClick={() => setContainerWidth(w.id)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {w.label}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {w.desc}
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Density */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                3. Information Density
              </h3>
              <span className="text-xs text-slate-500">Spacing &amp; compactness</span>
            </div>

            <div className="space-y-2">
              {densities.map((d) => {
                const isSelected = contentDensity === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setContentDensity(d.id)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {d.label}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {d.desc}
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Section 3: Typography Scaling */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Type className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              4. Reading Text Size Scaling
            </h3>
            <span className="text-xs text-slate-500">Ideal for long exam preparation hours</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {fontScales.map((f) => {
              const isSelected = fontSize === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFontSize(f.id)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40 ring-1 ring-emerald-500'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {f.label}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                  </div>
                  <p className={`text-slate-600 dark:text-slate-400 leading-snug ${
                    f.id === 'xlarge' ? 'text-base font-semibold' : f.id === 'large' ? 'text-sm font-medium' : 'text-xs'
                  }`}>
                    {f.preview}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Preferences auto-save immediately to your browser storage.
          </div>
          <button
            onClick={() => setLayoutModalOpen(false)}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md shadow-emerald-900/20 transition cursor-pointer"
          >
            Apply &amp; Continue Practicing
          </button>
        </div>

      </div>
    </div>
  );
};
