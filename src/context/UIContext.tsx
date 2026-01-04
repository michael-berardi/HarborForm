'use client';

import React, { createContext, useContext, useState } from 'react';

type UIContextType = {
  isPhilosophyOpen: boolean;
  openPhilosophy: () => void;
  closePhilosophy: () => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  const openPhilosophy = () => setIsPhilosophyOpen(true);
  const closePhilosophy = () => setIsPhilosophyOpen(false);

  return (
    <UIContext.Provider value={{ isPhilosophyOpen, openPhilosophy, closePhilosophy }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
