'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DayPicker } from 'react-day-picker';
import { format, addDays, isWeekend } from 'date-fns';
import { ArrowRight, ArrowLeft, Check, Loader2, Calendar, User, Building2, Target, Clock, Send } from 'lucide-react';
import 'react-day-picker/style.css';

interface FormData {
    // Contact
    name: string;
    email: string;
    phone: string;
    // Business
    company: string;
    website: string;
    industry: string;
    // Situation
    whatsWorking: string;
    whatsNot: string;
    // Goals
    goals: string;
    // Timeline
    timeline: string;
    budget: string;
    // Schedule
    preferredDate: Date | undefined;
    preferredTime: string;
}

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

const industries = [
    'E-commerce / Retail',
    'SaaS / Technology',
    'Professional Services',
    'Real Estate',
    'Healthcare',
    'Finance',
    'Education',
    'Other',
];

const budgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
    'Not sure yet',
];

const timelines = [
    'ASAP',
    'Within 1 month',
    'Within 3 months',
    'Just exploring',
];

const timeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
];

export default function AuditForm() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<FormData>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const totalSteps = 6;

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
            const response = await fetch('/api/book-audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    preferredDate: data.preferredDate ? format(data.preferredDate, 'MMMM d, yyyy') : '',
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            setIsSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again or email mike@libertydesign.studio directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (step < totalSteps - 1 && canProceed()) {
            setStep(step + 1);
        } else if (step === totalSteps - 1 && canProceed()) {
            handleSubmit();
        }
    };

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
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
                className="text-center py-12"
            >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    Request Received!
                </h3>
                <p className="text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>
                    Thank you, {data.name.split(' ')[0]}!
                </p>
                <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                    I&apos;ll confirm your {data.preferredTime} slot on {data.preferredDate && format(data.preferredDate, 'MMMM d')} within 24 hours.
                </p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Check your email at <strong>{data.email}</strong> for confirmation details.
                </p>
            </motion.div>
        );
    }

    const stepContent = [
        // Step 0: Contact
        <div key="contact" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <User size={20} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Let&apos;s start with you</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Your Name *</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Email Address *</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Phone (optional)</label>
                <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="555-123-4567"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
        </div>,

        // Step 1: Business
        <div key="business" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Building2 size={20} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Tell me about your business</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Company Name *</label>
                <input
                    type="text"
                    value={data.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Website URL</label>
                <input
                    type="url"
                    value={data.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    placeholder="https://acme.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Industry</label>
                <div className="grid grid-cols-2 gap-2">
                    {industries.map((ind) => (
                        <button
                            key={ind}
                            type="button"
                            onClick={() => updateField('industry', ind)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${data.industry === ind
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/5 border border-white/10 hover:border-blue-500/50'
                                }`}
                            style={{ color: data.industry === ind ? 'white' : 'var(--text-secondary)' }}
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
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Current situation</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>What&apos;s working well?</label>
                <textarea
                    value={data.whatsWorking}
                    onChange={(e) => updateField('whatsWorking', e.target.value)}
                    placeholder="Good traffic, strong brand recognition, loyal customers..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors resize-none text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>What&apos;s not working?</label>
                <textarea
                    value={data.whatsNot}
                    onChange={(e) => updateField('whatsNot', e.target.value)}
                    placeholder="Low conversion, unclear messaging, outdated website..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors resize-none text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
        </div>,

        // Step 3: Goals
        <div key="goals" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Target size={20} className="text-orange-400" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>What do you want to achieve?</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Your goals *</label>
                <textarea
                    value={data.goals}
                    onChange={(e) => updateField('goals', e.target.value)}
                    placeholder="Scale to $1M ARR, improve lead quality, launch new product line, rebrand completely..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 focus:border-blue-500 focus:outline-none transition-colors resize-none text-[16px]"
                    style={{ color: 'var(--text-primary)' }}
                />
            </div>
        </div>,

        // Step 4: Timeline & Budget
        <div key="timeline" className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center">
                    <Clock size={20} className="text-pink-400" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Timeline & Investment</h3>
            </div>
            <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>When do you want to start? *</label>
                <div className="grid grid-cols-2 gap-2">
                    {timelines.map((t) => (
                        <button
                            key={t}
                            type="button"
                            onClick={() => updateField('timeline', t)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${data.timeline === t
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/5 border border-white/10 hover:border-blue-500/50'
                                }`}
                            style={{ color: data.timeline === t ? 'white' : 'var(--text-secondary)' }}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>Investment range *</label>
                <div className="grid grid-cols-1 gap-2">
                    {budgets.map((b) => (
                        <button
                            key={b}
                            type="button"
                            onClick={() => updateField('budget', b)}
                            className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-left ${data.budget === b
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/5 border border-white/10 hover:border-blue-500/50'
                                }`}
                            style={{ color: data.budget === b ? 'white' : 'var(--text-secondary)' }}
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
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Calendar size={20} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Pick a time</h3>
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
                            day: 'rdp-day hover:bg-blue-500/20 rounded-lg',
                            selected: '!bg-blue-500 !text-white',
                            today: 'font-bold text-blue-400',
                        }}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
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
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-white/5 border border-white/10 hover:border-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed'
                                    }`}
                                style={{ color: data.preferredTime === time ? 'white' : 'var(--text-secondary)' }}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                    <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
                        All times are Eastern Time (EST/EDT)
                    </p>
                </div>
            </div>
        </div>,
    ];

    return (
        <div className="relative">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                        Step {step + 1} of {totalSteps}
                    </span>
                    <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                        {Math.round(((step + 1) / totalSteps) * 100)}%
                    </span>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden mt-2">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
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
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5"
                    style={{ color: 'var(--text-secondary)' }}
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed() || isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all bg-blue-500 text-white hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Submitting...
                        </>
                    ) : step === totalSteps - 1 ? (
                        <>
                            <Send size={18} />
                            Request Audit
                        </>
                    ) : (
                        <>
                            Continue
                            <ArrowRight size={18} />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}
