'use client';

import { useTheme } from '@/lib/theme-provider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="theme-icon" />
      ) : (
        <Moon className="theme-icon" />
      )}
    </button>
  );
}
