'use client';

/**
 * A simple client-side persistence layer for the Admin ecosystem.
 * Stores tasks, billing items, and invoices in LocalStorage.
 */

export interface Task {
    id: string;
    title: string;
    description: string;
    client: string;
    property?: string;
    priority: 'high' | 'medium' | 'low';
    assignedTo: 'admin' | 'nico';
    status: 'pending' | 'in-progress' | 'completed' | 'blocked';
    createdAt: string;
    completedAt?: string;
    notes?: string;
}

export interface BillingItem {
    id: string;
    taskId?: string;
    title: string;
    client: string;
    property?: string;
    platforms?: string[];
    duration: number; // decimal hours
    minutes?: number; // raw minutes for backup
    isFixedRate: boolean;
    rate?: number;
    date: string;
    status: 'pending' | 'invoiced';
}

export interface Invoice {
    id: string;
    items: string[];
    total: number;
    client: string;
    status: 'draft' | 'sent' | 'paid';
    createdAt: string;
}

const STORAGE_KEYS = {
    TASKS: 'ls_admin_tasks_v2',
    BILLING: 'ls_admin_billing_v2',
    INVOICES: 'ls_admin_invoices_v2',
};

function getStored<T>(key: string): T[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
}

function setStored<T>(key: string, data: T[]) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(data));
}

export const DataStore = {
    // Tasks
    getTasks: () => getStored<Task>(STORAGE_KEYS.TASKS),
    addTask: (task: Omit<Task, 'id' | 'createdAt' | 'status'>) => {
        const tasks = getStored<Task>(STORAGE_KEYS.TASKS);
        const newTask: Task = {
            ...task,
            id: Math.random().toString(36).substr(2, 9),
            status: 'pending',
            createdAt: new Date().toISOString(),
        };
        setStored(STORAGE_KEYS.TASKS, [...tasks, newTask]);
        return newTask;
    },
    updateTask: (id: string, updates: Partial<Task>) => {
        const tasks = getStored<Task>(STORAGE_KEYS.TASKS);
        const updated = tasks.map(t => t.id === id ? { ...t, ...updates } : t);
        setStored(STORAGE_KEYS.TASKS, updated);
        return updated.find(t => t.id === id);
    },
    deleteTask: (id: string) => {
        const tasks = getStored<Task>(STORAGE_KEYS.TASKS);
        setStored(STORAGE_KEYS.TASKS, tasks.filter(t => t.id !== id));
    },

    // Billing
    getBillingItems: () => getStored<BillingItem>(STORAGE_KEYS.BILLING),
    addBillingItem: (item: Omit<BillingItem, 'id' | 'status'>) => {
        const items = getStored<BillingItem>(STORAGE_KEYS.BILLING);
        const newItem: BillingItem = {
            ...item,
            id: Math.random().toString(36).substr(2, 9),
            status: 'pending',
        };
        setStored(STORAGE_KEYS.BILLING, [...items, newItem]);
        return newItem;
    },
    updateBillingItem: (id: string, updates: Partial<BillingItem>) => {
        const items = getStored<BillingItem>(STORAGE_KEYS.BILLING);
        const updated = items.map(i => i.id === id ? { ...i, ...updates } : i);
        setStored(STORAGE_KEYS.BILLING, updated);
    },
    deleteBillingItem: (id: string) => {
        const items = getStored<BillingItem>(STORAGE_KEYS.BILLING);
        setStored(STORAGE_KEYS.BILLING, items.filter(i => i.id !== id));
    },

    // Invoices
    getInvoices: () => getStored<Invoice>(STORAGE_KEYS.INVOICES),
    createInvoice: (itemIds: string[], total: number, client: string) => {
        const invoices = getStored<Invoice>(STORAGE_KEYS.INVOICES);
        const newInvoice: Invoice = {
            id: `INV-${Date.now()}`,
            items: itemIds,
            total,
            client,
            status: 'draft',
            createdAt: new Date().toISOString(),
        };
        setStored(STORAGE_KEYS.INVOICES, [...invoices, newInvoice]);

        const billingItems = getStored<BillingItem>(STORAGE_KEYS.BILLING);
        const updatedItems = billingItems.map(item =>
            itemIds.includes(item.id) ? { ...item, status: 'invoiced' as const } : item
        );
        setStored(STORAGE_KEYS.BILLING, updatedItems);

        return newInvoice;
    }
};
