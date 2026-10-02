import React, { createContext, useContext, useState, useEffect } from 'react';

export type ShellLayout = 'standard' | 'sidebar' | 'split' | 'zen';
export type ContainerWidth = 'standard' | 'wide' | 'fluid';
export type ContentDensity = 'comfortable' | 'standard' | 'compact';
export type FontSizeScale = 'normal' | 'large' | 'xlarge';

interface LayoutContextType {
  shellLayout: ShellLayout;
  setShellLayout: (layout: ShellLayout) => void;
  containerWidth: ContainerWidth;
  setContainerWidth: (width: ContainerWidth) => void;
  contentDensity: ContentDensity;
  setContentDensity: (density: ContentDensity) => void;
  fontSize: FontSizeScale;
  setFontSize: (size: FontSizeScale) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => void;
  toggleSidebar: () => void;
  layoutModalOpen: boolean;
  setLayoutModalOpen: (open: boolean) => void;
  
  // Helper CSS class getters
  getContainerClass: () => string;
  getContentSpacingClass: () => string;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Shell Layout (standard top-nav, modern executive sidebar, split workspace, zen focus)
  const [shellLayout, setShellLayoutState] = useState<ShellLayout>(() => {
    const saved = localStorage.getItem('matb_shell_layout');
    if (saved && ['standard', 'sidebar', 'split', 'zen'].includes(saved)) {
      return saved as ShellLayout;
    }
    return 'sidebar';
  });

  // Container Width (standard 1280px, wide 1536px, fluid 100%)
  const [containerWidth, setContainerWidthState] = useState<ContainerWidth>(() => {
    const saved = localStorage.getItem('matb_container_width');
    if (saved && ['standard', 'wide', 'fluid'].includes(saved)) {
      return saved as ContainerWidth;
    }
    return 'fluid';
  });

  // Content Density (comfortable, standard, compact)
  const [contentDensity, setContentDensityState] = useState<ContentDensity>(() => {
    const saved = localStorage.getItem('matb_content_density');
    if (saved && ['comfortable', 'standard', 'compact'].includes(saved)) {
      return saved as ContentDensity;
    }
    return 'compact';
  });

  // Font Size (normal, large, xlarge)
  const [fontSize, setFontSizeState] = useState<FontSizeScale>(() => {
    const saved = localStorage.getItem('matb_font_size');
    if (saved && ['normal', 'large', 'xlarge'].includes(saved)) {
      return saved as FontSizeScale;
    }
    return 'normal';
  });

  // Sidebar Collapsed state (rail vs full)
  const [sidebarCollapsed, setSidebarCollapsedState] = useState<boolean>(() => {
    const saved = localStorage.getItem('matb_sidebar_collapsed');
    return saved === 'true';
  });

  // Layout switcher modal state
  const [layoutModalOpen, setLayoutModalOpen] = useState<boolean>(false);

  const setShellLayout = (layout: ShellLayout) => {
    setShellLayoutState(layout);
    localStorage.setItem('matb_shell_layout', layout);
  };

  const setContainerWidth = (width: ContainerWidth) => {
    setContainerWidthState(width);
    localStorage.setItem('matb_container_width', width);
  };

  const setContentDensity = (density: ContentDensity) => {
    setContentDensityState(density);
    localStorage.setItem('matb_content_density', density);
  };

  const setFontSize = (size: FontSizeScale) => {
    setFontSizeState(size);
    localStorage.setItem('matb_font_size', size);
  };

  const setSidebarCollapsed = (value: boolean | ((prev: boolean) => boolean)) => {
    setSidebarCollapsedState((prev) => {
      const next = typeof value === 'function' ? value(prev) : value;
      localStorage.setItem('matb_sidebar_collapsed', String(next));
      return next;
    });
  };

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  // Sync font size scaling class onto HTML document element
  useEffect(() => {
    document.documentElement.classList.remove('text-scale-normal', 'text-scale-large', 'text-scale-xlarge');
    if (fontSize === 'large') {
      document.documentElement.classList.add('text-scale-large');
    } else if (fontSize === 'xlarge') {
      document.documentElement.classList.add('text-scale-xlarge');
    } else {
      document.documentElement.classList.add('text-scale-normal');
    }
  }, [fontSize]);

  // Compute container class based on width settings
  const getContainerClass = (): string => {
    switch (containerWidth) {
      case 'fluid':
        return 'w-full max-w-full px-4 sm:px-6 lg:px-8';
      case 'wide':
        return 'max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8';
      case 'standard':
      default:
        return 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
    }
  };

  // Compute spacing class based on content density
  const getContentSpacingClass = (): string => {
    switch (contentDensity) {
      case 'compact':
        return 'space-y-4 py-4';
      case 'comfortable':
        return 'space-y-10 py-10';
      case 'standard':
      default:
        return 'space-y-8 py-8';
    }
  };

  return (
    <LayoutContext.Provider
      value={{
        shellLayout,
        setShellLayout,
        containerWidth,
        setContainerWidth,
        contentDensity,
        setContentDensity,
        fontSize,
        setFontSize,
        sidebarCollapsed,
        setSidebarCollapsed,
        toggleSidebar,
        layoutModalOpen,
        setLayoutModalOpen,
        getContainerClass,
        getContentSpacingClass,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
