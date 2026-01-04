'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Download, Send, Plus, Trash2 } from 'lucide-react';

interface LineItem {
    id: string;
    description: string;
    quantity: number;
    rate: number;
}

interface ProposalData {
    clientName: string;
    projectTitle: string;
    projectDescription: string;
    lineItems: LineItem[];
    timeline: string;
    validUntil: string;
    notes: string;
}

const defaultLineItem = (): LineItem => ({
    id: crypto.randomUUID(),
    description: '',
    quantity: 1,
    rate: 0,
});

export default function ProposalsPage() {
    const [proposal, setProposal] = useState<ProposalData>({
        clientName: '',
        projectTitle: '',
        projectDescription: '',
        lineItems: [defaultLineItem()],
        timeline: '',
        validUntil: '',
        notes: '',
    });

    const addLineItem = () => {
        setProposal((prev) => ({
            ...prev,
            lineItems: [...prev.lineItems, defaultLineItem()],
        }));
    };

    const removeLineItem = (id: string) => {
        setProposal((prev) => ({
            ...prev,
            lineItems: prev.lineItems.filter((item) => item.id !== id),
        }));
    };

    const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
        setProposal((prev) => ({
            ...prev,
            lineItems: prev.lineItems.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            ),
        }));
    };

    const total = proposal.lineItems.reduce(
        (sum, item) => sum + item.quantity * item.rate,
        0
    );

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            {/* Header */}
            <header className="border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-950/80 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/0x"
                            className="p-2 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="flex items-center gap-2">
                            <FileText className="w-5 h-5 text-blue-400" />
                            <h1 className="text-lg font-semibold">Proposal Generator</h1>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                            Export PDF
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors">
                            <Send className="w-4 h-4" />
                            Send to Client
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-10">
                <div className="space-y-8">
                    {/* Client & Project Info */}
                    <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 space-y-4">
                        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            Client Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">Client Name</label>
                                <input
                                    type="text"
                                    value={proposal.clientName}
                                    onChange={(e) => setProposal({ ...proposal, clientName: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    placeholder="Acme Corp"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">Project Title</label>
                                <input
                                    type="text"
                                    value={proposal.projectTitle}
                                    onChange={(e) => setProposal({ ...proposal, projectTitle: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    placeholder="Website Redesign"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1.5">Project Description</label>
                            <textarea
                                value={proposal.projectDescription}
                                onChange={(e) => setProposal({ ...proposal, projectDescription: e.target.value })}
                                rows={3}
                                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                                placeholder="Describe the project scope and objectives..."
                            />
                        </div>
                    </section>

                    {/* Line Items */}
                    <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                                Line Items
                            </h2>
                            <button
                                onClick={addLineItem}
                                className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Add Item
                            </button>
                        </div>

                        <div className="space-y-3">
                            {proposal.lineItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-12 gap-3 items-start"
                                >
                                    <div className="col-span-6">
                                        {index === 0 && (
                                            <label className="block text-xs text-zinc-500 mb-1">Description</label>
                                        )}
                                        <input
                                            type="text"
                                            value={item.description}
                                            onChange={(e) => updateLineItem(item.id, 'description', e.target.value)}
                                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                            placeholder="Service description"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        {index === 0 && (
                                            <label className="block text-xs text-zinc-500 mb-1">Qty</label>
                                        )}
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateLineItem(item.id, 'quantity', parseInt(e.target.value) || 1)}
                                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        {index === 0 && (
                                            <label className="block text-xs text-zinc-500 mb-1">Rate ($)</label>
                                        )}
                                        <input
                                            type="number"
                                            min="0"
                                            step="0.01"
                                            value={item.rate}
                                            onChange={(e) => updateLineItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                        />
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        {index === 0 && <div className="h-5" />}
                                        <button
                                            onClick={() => removeLineItem(item.id)}
                                            className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                                            disabled={proposal.lineItems.length === 1}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Total */}
                        <div className="pt-4 border-t border-zinc-800/50 flex justify-end">
                            <div className="text-right">
                                <p className="text-sm text-zinc-500">Estimated Total</p>
                                <p className="text-2xl font-semibold text-zinc-100">
                                    ${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Timeline & Validity */}
                    <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 space-y-4">
                        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            Terms
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">Estimated Timeline</label>
                                <input
                                    type="text"
                                    value={proposal.timeline}
                                    onChange={(e) => setProposal({ ...proposal, timeline: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    placeholder="4-6 weeks"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">Valid Until</label>
                                <input
                                    type="date"
                                    value={proposal.validUntil}
                                    onChange={(e) => setProposal({ ...proposal, validUntil: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1.5">Additional Notes</label>
                            <textarea
                                value={proposal.notes}
                                onChange={(e) => setProposal({ ...proposal, notes: e.target.value })}
                                rows={3}
                                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                                placeholder="Payment terms, inclusions, exclusions..."
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
