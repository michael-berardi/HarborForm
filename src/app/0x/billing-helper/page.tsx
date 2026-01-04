'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ChevronLeft,
    Receipt,
    ArrowRight,
    CheckCircle2,
    Clock,
    Briefcase,
    FileText,
    Building2,
    Calendar as CalendarIcon,
    Trash2,
    Settings,
    Dices,
    Info,
    ExternalLink,
    ChevronDown,
    Layout,
    Layers,
    Sparkles,
    Search
} from 'lucide-react';
import { DataStore, BillingItem } from '@/lib/data-store';
import { clients as clientList, PLATFORMS, WORKLOAD_SCALES } from '@/lib/clients';

export default function BillingHelper() {
    const [items, setItems] = useState<BillingItem[]>([]);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [activeTab, setActiveTab] = useState<'pending' | 'invoiced'>('pending');

    // PEP Automation State
    const [pepWorkload, setPepWorkload] = useState<'Light' | 'Moderate' | 'High'>('Moderate');
    const [showPepAutomation, setShowPepAutomation] = useState(false);

    useEffect(() => {
        setItems(DataStore.getBillingItems());
    }, []);

    const pendingItems = useMemo(() => items.filter(i => i.status === 'pending'), [items]);
    const invoicedItems = useMemo(() => items.filter(i => i.status === 'invoiced'), [items]);

    const selectedItems = useMemo(() =>
        pendingItems.filter(i => selectedIds.includes(i.id)),
        [pendingItems, selectedIds]);

    const totals = useMemo(() => {
        const hourlySubtotal = selectedItems.reduce((acc, item) => {
            const client = clientList.find(c => c.id === item.client);
            const rate = item.rate || client?.billableRate || 53;
            return acc + (item.duration * rate);
        }, 0);
        return { subtotal: hourlySubtotal };
    }, [selectedItems]);

    const toggleSelect = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleGenerateInvoice = () => {
        if (selectedIds.length === 0) return;
        setIsGenerating(true);

        // Group by client since we likely need separate invoices
        const clientsInSelection = Array.from(new Set(selectedItems.map(i => i.client)));

        setTimeout(() => {
            clientsInSelection.forEach(clientId => {
                const clientItems = selectedItems.filter(i => i.client === clientId);
                const client = clientList.find(c => c.id === clientId);
                const rate = client?.billableRate || 53;
                const total = clientItems.reduce((acc, item) => acc + (item.duration * (item.rate || rate)), 0);

                DataStore.createInvoice(clientItems.map(i => i.id), total, clientId);
            });

            setItems(DataStore.getBillingItems());
            setSelectedIds([]);
            setIsGenerating(false);
            alert('Invoice drafts created and staged for Square commit.');
        }, 1500);
    };

    const generatePepMonthlyItem = () => {
        const scale = WORKLOAD_SCALES.find(s => s.label === pepWorkload);
        if (!scale) return;

        // Randomize hours
        const randomized = (Math.random() * (scale.max - scale.min) + scale.min).toFixed(2);
        const hours = parseFloat(randomized);

        // Get all Tuesdays in current month
        const now = new Date();
        const tuesdays: string[] = [];
        const d = new Date(now.getFullYear(), now.getMonth(), 1);
        while (d.getMonth() === now.getMonth()) {
            if (d.getDay() === 2) {
                tuesdays.push(`${now.getMonth() + 1}/${d.getDate()}`);
            }
            d.setDate(d.getDate() + 1);
        }

        const title = `PEP Real Estate — Monthly Planning, Review & Board Management\nOngoing coordination of marketing planner, including task updates, progress tracking, campaign reviews, and preparation of weekly reports in Notion. (approx. ${hours} hrs / 10 hrs max) [${tuesdays.join(', ')}]`;

        DataStore.addBillingItem({
            title,
            client: 'pep',
            duration: hours,
            minutes: Math.round(hours * 60),
            isFixedRate: false,
            date: new Date().toISOString()
        });

        setItems(DataStore.getBillingItems());
        setShowPepAutomation(false);
    };

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans transition-colors duration-300">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                {/* Navigation */}
                <Link href="/0x" className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all mb-12 group">
                    <div className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center group-hover:bg-[var(--bg-tertiary)] group-hover:-translate-x-1 transition-all">
                        <ChevronLeft className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold tracking-tight uppercase">Admin Dashboard</span>
                </Link>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                                <Receipt className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Billing Helper.</h1>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg font-medium">Transform completed work into Square-ready invoices.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowPepAutomation(!showPepAutomation)}
                            className="px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[var(--bg-tertiary)] transition-all"
                        >
                            <Dices className="w-4 h-4 text-amber-500" />
                            PEP Auto-Gen
                        </button>
                        {selectedIds.length > 0 && (
                            <button
                                onClick={handleGenerateInvoice}
                                disabled={isGenerating}
                                className={`px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 ${isGenerating ? 'opacity-50 cursor-wait' : 'hover:bg-blue-500'}`}
                            >
                                {isGenerating ? 'Creating Drafts...' : `Invoice Selection (${selectedIds.length})`}
                                {!isGenerating && <ArrowRight className="w-4 h-4" />}
                            </button>
                        )}
                    </div>
                </div>

                {/* PEP Automation Panel */}
                <AnimatePresence>
                    {showPepAutomation && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -20, height: 0 }}
                            className="overflow-hidden mb-12"
                        >
                            <div className="p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/20 rounded-[32px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                                    <Sparkles size={120} />
                                </div>

                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <Dices className="text-amber-500" />
                                    Monthly Marketing Planner Generator
                                </h3>
                                <p className="text-[var(--text-secondary)] mb-8 text-sm max-w-xl leading-relaxed">
                                    Based on your internal guidelines, this will curate the Tues-dated PEP line item with randomized hours tied to your workload scale.
                                </p>

                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex bg-[var(--bg-primary)] border border-amber-500/20 p-1.5 rounded-2xl">
                                        {WORKLOAD_SCALES.map(s => (
                                            <button
                                                key={s.label}
                                                onClick={() => setPepWorkload(s.label as any)}
                                                className={`px-8 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${pepWorkload === s.label ? 'bg-amber-500 text-white shadow-xl shadow-amber-500/20' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}
                                            >
                                                {s.label}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex-1 text-[var(--text-muted)] text-xs font-medium italic">
                                        <Info className="inline w-3 h-3 mr-1" />
                                        {pepWorkload === 'Light' && 'Target: 6.8 – 7.5 hrs'}
                                        {pepWorkload === 'Moderate' && 'Target: 7.0 – 8.5 hrs'}
                                        {pepWorkload === 'High' && 'Target: 8.5 – 9.8 hrs'}
                                    </div>
                                    <button
                                        onClick={generatePepMonthlyItem}
                                        className="px-10 py-4 bg-amber-500 text-white rounded-2xl font-bold text-sm hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10 active:scale-95"
                                    >
                                        Generate & Add Item
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Workload Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main List */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex gap-8 border-b border-[var(--border-subtle)] mb-8">
                            <button
                                onClick={() => setActiveTab('pending')}
                                className={`pb-4 text-xs font-bold tracking-widest uppercase transition-all relative ${activeTab === 'pending' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] opacity-60 hover:opacity-100'}`}
                            >
                                Pending Work ({pendingItems.length})
                                {activeTab === 'pending' && <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
                            </button>
                            <button
                                onClick={() => setActiveTab('invoiced')}
                                className={`pb-4 text-xs font-bold tracking-widest uppercase transition-all relative ${activeTab === 'invoiced' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] opacity-60 hover:opacity-100'}`}
                            >
                                Recently Invoiced ({invoicedItems.length})
                                {activeTab === 'invoiced' && <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
                            </button>
                        </div>

                        <div className="space-y-4">
                            {activeTab === 'pending' ? (
                                pendingItems.length === 0 ? (
                                    <div className="text-center py-32 rounded-[40px] border-2 border-dashed border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-500/30 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Everything Billed.</h3>
                                        <p className="text-[var(--text-muted)] max-w-xs mx-auto text-sm">Completed tasks from the Task Planner appear here automatically.</p>
                                    </div>
                                ) : (
                                    pendingItems.map((item) => {
                                        const client = clientList.find(c => c.id === item.client);
                                        const isSelected = selectedIds.includes(item.id);

                                        return (
                                            <motion.div
                                                layout
                                                key={item.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className={`group p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${isSelected ? 'bg-blue-500/5 border-blue-500/30 shadow-2xl shadow-blue-500/5' : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] hover:border-blue-500/30'}`}
                                                onClick={() => toggleSelect(item.id)}
                                            >
                                                <div className="flex items-start gap-6">
                                                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all mt-1 ${isSelected ? 'bg-blue-500 border-blue-500 text-white' : 'border-[var(--border-default)] group-hover:border-blue-500/50 text-transparent'}`}>
                                                        <CheckCircle2 className="w-4 h-4" strokeWidth={3} />
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h3 className="text-sm font-bold font-mono tracking-tight leading-relaxed line-clamp-2">
                                                                {item.title}
                                                            </h3>
                                                            <span className="text-[10px] font-bold text-[var(--bg-primary)] bg-[var(--text-primary)] px-2 py-1 rounded-md ml-4 shrink-0 shadow-sm">
                                                                {item.duration} hrs
                                                            </span>
                                                        </div>

                                                        <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                                                            <div className="flex items-center gap-1.5">
                                                                <Building2 className="w-3.5 h-3.5 text-blue-500" />
                                                                {client?.name || item.client}
                                                            </div>
                                                            <span className="w-1 h-1 bg-[var(--border-default)] rounded-full" />
                                                            <div className="flex items-center gap-1.5">
                                                                <CalendarIcon className="w-3.5 h-3.5 text-purple-500" />
                                                                {new Date(item.date).toLocaleDateString()}
                                                            </div>
                                                            {item.property && (
                                                                <>
                                                                    <span className="w-1 h-1 bg-[var(--border-default)] rounded-full" />
                                                                    <div className="flex items-center gap-1.5 text-zinc-400">
                                                                        <Layout className="w-3.5 h-3.5" />
                                                                        {item.property}
                                                                    </div>
                                                                </>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            DataStore.deleteBillingItem(item.id);
                                                            setItems(DataStore.getBillingItems());
                                                        }}
                                                        className="p-2 opacity-0 group-hover:opacity-100 text-[var(--text-muted)] hover:text-rose-500 transition-all active:scale-90"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        );
                                    })
                                )
                            ) : (
                                <div className="space-y-3 opacity-60 grayscale scale-[0.98] origin-top">
                                    {invoicedItems.length === 0 ? (
                                        <p className="text-center py-20 text-[var(--text-muted)] italic text-sm">No recent invoice history.</p>
                                    ) : (
                                        invoicedItems.map(item => (
                                            <div key={item.id} className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl flex items-center justify-between">
                                                <span className="text-xs font-medium truncate max-w-md">{item.title}</span>
                                                <div className="flex items-center gap-4 shrink-0">
                                                    <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">{item.client}</span>
                                                    <span className="text-[10px] font-bold px-2 py-1 bg-[var(--bg-tertiary)] rounded">{item.duration} hrs</span>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Metrics */}
                    <div className="space-y-8">
                        <div className="p-8 bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-[40px] shadow-2xl relative overflow-hidden backdrop-blur-xl">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12">
                                <Receipt size={140} />
                            </div>

                            <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-8">Invoice Summary</h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1 opacity-60">Status</p>
                                    <p className="text-sm font-bold text-blue-500">Staging for Square Draft</p>
                                </div>

                                <div className="flex items-center justify-between py-6 border-y border-[var(--border-subtle)]">
                                    <div>
                                        <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1 opacity-60">Selected</p>
                                        <p className="text-2xl font-bold">{selectedIds.length} <span className="text-sm text-[var(--text-muted)] font-medium">Items</span></p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1 opacity-60">Est. Value</p>
                                        <p className="text-2xl font-bold text-amber-500 truncate">${totals.subtotal.toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Info size={18} className="text-blue-500" />
                                    </div>
                                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
                                        Drafts created here will be committed to your Square account. Rates are calculated based on client profiles.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-indigo-500/5 to-purple-600/5 border border-indigo-500/10 rounded-[40px]">
                            <h4 className="flex items-center gap-2 text-sm font-bold mb-4">
                                <Layout className="w-4 h-4 text-indigo-400" />
                                Context Snapshot
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                                    <span>Standard Rate</span>
                                    <span className="text-[var(--text-primary)]">$53 / hr</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                                    <span>PEP Threshold</span>
                                    <span className="text-[var(--text-primary)]">10 hrs max / mo</span>
                                </div>
                                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                                    <span>Tax Logic</span>
                                    <span className="text-[var(--text-primary)]">None (Square handles)</span>
                                </div>
                            </div>
                            <Link href="/0x/invoices" className="mt-8 text-[10px] font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2 group">
                                Review Invoice Ledger
                                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
