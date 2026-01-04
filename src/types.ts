// Harbor Form Type Definitions

export interface FormData {
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

export interface HarborFormProps {
    // Submission handlers
    onSubmit?: (data: FormData) => Promise<void>;
    webhookUrl?: string;

    // Branding/Theming
    accentColor?: string;
    showPoweredBy?: boolean;
    poweredByText?: string;
    poweredByUrl?: string;

    // Customization
    industries?: string[];
    budgets?: string[];
    timelines?: string[];
    timeSlots?: string[];

    // Callbacks
    onStepChange?: (step: number) => void;
    onComplete?: (data: FormData) => void;

    // Content customization
    successTitle?: string;
    successMessage?: string;
    submitButtonText?: string;
}

export const defaultIndustries = [
    'E-commerce / Retail',
    'SaaS / Technology',
    'Professional Services',
    'Real Estate',
    'Healthcare',
    'Finance',
    'Education',
    'Other',
];

export const defaultBudgets = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
    'Not sure yet',
];

export const defaultTimelines = [
    'ASAP',
    'Within 1 month',
    'Within 3 months',
    'Just exploring',
];

export const defaultTimeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
];
