'use client';

import HarborForm from '@/components/HarborForm';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[var(--hf-bg-primary)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl">
        {/* Demo Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--hf-text-primary)]">
            Harbor Form
          </h1>
          <p className="mt-3 text-base text-[var(--hf-text-secondary)]">
            A premium, multi-step form component
          </p>
          <p className="mt-1 text-sm text-[var(--hf-text-muted)]">
            White-label. Customizable. Ready to integrate.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[var(--hf-bg-secondary)] border border-[var(--hf-border-subtle)] rounded-2xl p-6 md:p-8 shadow-xl">
          <HarborForm
            onSubmit={async (data) => {
              // Demo handler - logs to console
              console.log('Form submitted:', data);
              // Simulate API delay
              await new Promise(resolve => setTimeout(resolve, 1500));
            }}
            onComplete={(data) => {
              console.log('Form completed:', data);
            }}
            onStepChange={(step) => {
              console.log('Step changed to:', step);
            }}
          />
        </div>

        {/* Integration Info */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-[var(--hf-text-muted)]">
            See <code className="px-1.5 py-0.5 bg-white/5 rounded text-[var(--hf-accent)]">README.md</code> for integration instructions
          </p>
        </div>
      </div>
    </main>
  );
}
