'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DayPicker } from 'react-day-picker';
import { format, addDays, isWeekend } from 'date-fns';
import { ArrowRight, ArrowLeft, Check, Loader2, Calendar, User, Building2, Target, Clock, Send } from 'lucide-react';
import 'react-day-picker/style.css';
import {
    FormData,
    HarborFormProps,
    defaultIndustries,
    defaultBudgets,
    defaultTimelines,
    defaultTimeSlots,
} from '@/types';

const initialData: FormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    whatsWorking: '',
    whatsNot: '',
    goals: '',
    timeline: '',
    budget: '',
    preferredDate: undefined,
    preferredTime: '',
};

export default function HarborForm({
    onSubmit,
    webhookUrl,
    accentColor,
    showPoweredBy = true,
    poweredByText = 'Liberty Design',
    poweredByUrl = 'https://libertydesign.studio',
    industries = defaultIndustries,
    budgets = defaultBudgets,
    timelines = defaultTimelines,
    timeSlots = defaultTimeSlots,
    onStepChange,
    onComplete,
    successTitle = 'Request Received!',
    successMessage = "We'll be in touch within 24 hours to confirm your appointment.",
    submitButtonText = 'Submit Request',
}: HarborFormProps) {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<FormData>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const totalSteps = 6;

    // Apply custom accent color via CSS variable
    const accentStyle = accentColor ? { '--hf-accent': accentColor } as React.CSSProperties : {};

    const updateField = (field: keyof FormData, value: string | Date | undefined) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const canProceed = (): boolean => {
        switch (step) {
            case 0: return data.name.trim() !== '' && data.email.trim() !== '';
            case 1: return data.company.trim() !== '';
            case 2: return true; // Optional
            case 3: return data.goals.trim() !== '';
            case 4: return data.timeline !== '' && data.budget !== '';
            case 5: return data.preferredDate !== undefined && data.preferredTime !== '';
            default: return true;
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError('');

        try {
            const formattedData = {
                ...data,
                preferredDate: data.preferredDate ? format(data.preferredDate, 'MMMM d, yyyy') : '',
            };

            if (onSubmit) {
                await onSubmit(data);
            } else if (webhookUrl) {
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formattedData),
                });

                if (!response.ok) {
                    throw new Error('Failed to submit');
                }
            } else {
                // Default: post to /api/submit
                const response = await fetch('/api/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formattedData),
                });

                if (!response.ok) {
                    throw new Error('Failed to submit');
                }
            }

            setIsSubmitted(true);
            onComplete?.(data);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (step < totalSteps - 1 && canProceed()) {
            const newStep = step + 1;
            setStep(newStep);
            onStepChange?.(newStep);
        } else if (step === totalSteps - 1 && canProceed()) {
            handleSubmit();
        }
    };

    const prevStep = () => {
        if (step > 0) {
            const newStep = step - 1;
            setStep(newStep);
            onStepChange?.(newStep);
        }
    };

    // Disable weekends and past dates
    const disabledDays = (date: Date) => {
        return isWeekend(date) || date < addDays(new Date(), 1);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="hf-success text-center py-12"
                style={accentStyle}
            >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--hf-text-primary)]">
                    {successTitle}
                </h3>
                <p className="text-lg mb-2 text-[var(--hf-text-secondary)]">
                    Thank you, {data.name.split(' ')[0]}!
                </p>
                <p className="mb-6 text-[var(--hf-text-muted)]">
                    {successMessage}
                </p>
                {data.preferredDate && (
                    <p className="text-sm text-[var(--hf-text-muted)]">
                        Requested: <strong>{data.preferredTime}</strong> on <strong>{format(data.preferredDate, 'MMMM d')}</strong>
                    </p>
                )}
                <p className="text-sm mt-4 text-[var(--hf-text-muted)]">
                    Confirmation sent to <strong>{data.email}</strong>
                </p>

                {showPoweredBy && (
                    <div className="mt-8 pt-6 border-t border-white/10">
                        <a
                            href={poweredByUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--hf-text-muted)] hover:text-[var(--hf-accent)] transition-colors"
                        >
                            Powered by {poweredByText}
                        </a>
                    </div>
                )}
            </motion.div>
        );
    }

    const stepContent = [
        // Step 0: Contact
        <div key="contact" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[var(--hf-accent)]/20 flex items-center justify-center">
                    <User size={20} className="text-[var(--hf-accent)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--hf-text-primary)]">Let&apos;s start with you</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">Your Name *</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="John Smith"
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">Email Address *</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="john@company.com"
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">Phone (optional)</label>
                <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="555-123-4567"
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
        </div>,

        // Step 1: Business
        <div key="business" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Building2 size={20} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-[var(--hf-text-primary)]">Tell us about your business</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">Company Name *</label>
                <input
                    type="text"
                    value={data.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    placeholder="Acme Corp"
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">Website URL</label>
                <input
                    type="url"
                    value={data.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    placeholder="https://acme.com"
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">Industry</label>
                <div className="grid grid-cols-2 gap-2">
                    {industries.map((ind) => (
                        <button
                            key={ind}
                            type="button"
                            onClick={() => updateField('industry', ind)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${data.industry === ind
                                ? 'bg-[var(--hf-accent)] text-white'
                                : 'bg-white/5 border border-white/10 hover:border-[var(--hf-accent)]/50 text-[var(--hf-text-secondary)]'
                                }`}
                        >
                            {ind}
                        </button>
                    ))}
                </div>
            </div>
        </div>,

        // Step 2: Situation
        <div key="situation" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Target size={20} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-[var(--hf-text-primary)]">Current situation</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">What&apos;s working well?</label>
                <textarea
                    value={data.whatsWorking}
                    onChange={(e) => updateField('whatsWorking', e.target.value)}
                    placeholder="Good traffic, strong brand recognition, loyal customers..."
                    rows={3}
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors resize-none text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">What&apos;s not working?</label>
                <textarea
                    value={data.whatsNot}
                    onChange={(e) => updateField('whatsNot', e.target.value)}
                    placeholder="Low conversion, unclear messaging, outdated website..."
                    rows={3}
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors resize-none text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
        </div>,

        // Step 3: Goals
        <div key="goals" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Target size={20} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-[var(--hf-text-primary)]">What do you want to achieve?</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2 text-[var(--hf-text-secondary)]">Your goals *</label>
                <textarea
                    value={data.goals}
                    onChange={(e) => updateField('goals', e.target.value)}
                    placeholder="Scale revenue, improve lead quality, launch new product line, rebrand completely..."
                    rows={4}
                    className="hf-input w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-[var(--hf-accent)] focus:outline-none transition-colors resize-none text-[16px] text-[var(--hf-text-primary)]"
                />
            </div>
        </div>,

        // Step 4: Timeline & Budget
        <div key="timeline" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                    <Clock size={20} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-[var(--hf-text-primary)]">Timeline & Investment</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-3 text-[var(--hf-text-secondary)]">When do you want to start? *</label>
                <div className="grid grid-cols-2 gap-2">
                    {timelines.map((t) => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => updateField('timeline', t)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${data.timeline === t
                                ? 'bg-[var(--hf-accent)] text-white'
                                : 'bg-white/5 border border-white/10 hover:border-[var(--hf-accent)]/50 text-[var(--hf-text-secondary)]'
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-3 text-[var(--hf-text-secondary)]">Investment range *</label>
                <div className="grid grid-cols-1 gap-2">
                    {budgets.map((b) => (
                        <button
                            key={b}
                            type="button"
                            onClick={() => updateField('budget', b)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${data.budget === b
                                ? 'bg-[var(--hf-accent)] text-white'
                                : 'bg-white/5 border border-white/10 hover:border-[var(--hf-accent)]/50 text-[var(--hf-text-secondary)]'
                                }`}
                        >
                            {b}
                        </button>
                    ))}
                </div>
            </div>
        </div>,

        // Step 5: Calendar
        <div key="calendar" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[var(--hf-accent)]/20 flex items-center justify-center">
                    <Calendar size={20} className="text-[var(--hf-accent)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--hf-text-primary)]">Pick a time</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                    <DayPicker
                        mode="single"
                        selected={data.preferredDate}
                        onSelect={(date) => updateField('preferredDate', date)}
                        disabled={disabledDays}
                        fromDate={addDays(new Date(), 1)}
                        toDate={addDays(new Date(), 60)}
                        className="!font-sans"
                        classNames={{
                            day: 'rdp-day hover:bg-[var(--hf-accent)]/20 rounded-lg',
                            selected: '!bg-[var(--hf-accent)] !text-white',
                            today: 'font-bold text-[var(--hf-accent)]',
                        }}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-3 text-[var(--hf-text-secondary)]">
                        {data.preferredDate ? `Available times on ${format(data.preferredDate, 'MMM d')}` : 'Select a date first'}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                            <button
                                key={time}
                                type="button"
                                disabled={!data.preferredDate}
                                onClick={() => updateField('preferredTime', time)}
                                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${data.preferredTime === time
                                    ? 'bg-[var(--hf-accent)] text-white'
                                    : 'bg-white/5 border border-white/10 hover:border-[var(--hf-accent)]/50 disabled:opacity-50 disabled:cursor-not-allowed text-[var(--hf-text-secondary)]'
                                    }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs mt-3 text-[var(--hf-text-muted)]">
                        All times are in your local timezone
                    </p>
                </div>
            </div>
        </div>,
    ];

    return (
        <div className="hf-container relative" style={accentStyle}>
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--hf-text-muted)]">
                        Step {step + 1} of {totalSteps}
                    </span>
                    <span className="text-sm font-medium text-[var(--hf-text-muted)]">
                        {Math.round(((step + 1) / totalSteps) * 100)}%
                    </span>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden mt-2">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--hf-accent)] to-[var(--hf-accent-light)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Form Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[400px]"
                >
                    {stepContent[step]}
                </motion.div>
            </AnimatePresence>

            {/* Error Message */}
            {error && (
                <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {error}
                </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 0}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 text-[var(--hf-text-secondary)]"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed() || isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all bg-[var(--hf-accent)] text-white hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Submitting...
                        </>
                    ) : step === totalSteps - 1 ? (
                        <>
                            <Send size={18} />
                            {submitButtonText}
                        </>
                    ) : (
                        <>
                            Continue
                            <ArrowRight size={18} />
                        </>
                    )}
                </button>
            </div>

            {/* Powered By Footer */}
            {showPoweredBy && (
                <div className="mt-6 text-center">
                    <a
                        href={poweredByUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--hf-text-muted)] hover:text-[var(--hf-accent)] transition-colors"
                    >
                        Powered by {poweredByText}
                    </a>
                </div>
            )}
        </div>
    );
}
