'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

// Check session storage for dismissed state
const getSessionDismissed = () => {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem('exit_popup_dismissed') === 'true';
};
const emptySubscribe = () => () => { };
const useWasDismissed = () => useSyncExternalStore(emptySubscribe, getSessionDismissed, () => false);

export const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);
  const wasPreviouslyDismissed = useWasDismissed();
  const [dismissed, setDismissed] = useState(wasPreviouslyDismissed);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed && !show) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed, show]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    sessionStorage.setItem('exit_popup_dismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] p-8 rounded-2xl max-w-md w-full relative shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          onClick={handleDismiss}
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Before You Go...</h3>
        <p className="text-[var(--text-secondary)] mb-6 text-sm">
          Not ready to book a call? Get our free guide:
          <strong className="block mt-1 text-[var(--text-primary)]">&quot;5 Conversion Killers Hiding on Your Website&quot;</strong>
        </p>

        <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleDismiss(); alert('Guide sent! (Demo)'); }}>
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
          />
          <button type="submit" className="w-full py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white font-bold rounded-lg transition-colors shadow-lg">
            Send Me the Guide
          </button>
        </form>

        <p className="text-center mt-4 text-xs text-[var(--text-muted)]">
          Or <Link href="/insights" className="text-[var(--accent-primary)] hover:underline" onClick={handleDismiss}>explore our insights</Link> first.
        </p>
      </div>
    </div>
  );
};
