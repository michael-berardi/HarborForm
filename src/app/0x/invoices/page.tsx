'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Receipt, Download, Send, Plus, Trash2, Calendar } from 'lucide-react';

interface LineItem {
    id: string;
    description: string;
    quantity: number;
    rate: number;
}

interface InvoiceData {
    invoiceNumber: string;
    clientName: string;
    clientEmail: string;
    clientAddress: string;
    issueDate: string;
    dueDate: string;
    lineItems: LineItem[];
    notes: string;
    taxRate: number;
}

const defaultLineItem = (): LineItem => ({
    id: crypto.randomUUID(),
    description: '',
    quantity: 1,
    rate: 0,
});

const generateInvoiceNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `LDS-${year}${month}-${random}`;
};

export default function InvoicesPage() {
    const [invoice, setInvoice] = useState<InvoiceData>({
        invoiceNumber: generateInvoiceNumber(),
        clientName: '',
        clientEmail: '',
        clientAddress: '',
        issueDate: new Date().toISOString().split('T')[0],
        dueDate: '',
        lineItems: [defaultLineItem()],
        notes: '',
        taxRate: 0,
    });

    const addLineItem = () => {
        setInvoice((prev) => ({
            ...prev,
            lineItems: [...prev.lineItems, defaultLineItem()],
        }));
    };

    const removeLineItem = (id: string) => {
        setInvoice((prev) => ({
            ...prev,
            lineItems: prev.lineItems.filter((item) => item.id !== id),
        }));
    };

    const updateLineItem = (id: string, field: keyof LineItem, value: string | number) => {
        setInvoice((prev) => ({
            ...prev,
            lineItems: prev.lineItems.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            ),
        }));
    };

    const subtotal = invoice.lineItems.reduce(
        (sum, item) => sum + item.quantity * item.rate,
        0
    );
    const tax = subtotal * (invoice.taxRate / 100);
    const total = subtotal + tax;

    const openInSquare = () => {
        window.open('https://squareup.com/dashboard/invoices/create', '_blank');
    };

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
                            <Receipt className="w-5 h-5 text-amber-400" />
                            <h1 className="text-lg font-semibold">Invoice Preparation</h1>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                            Export PDF
                        </button>
                        <button
                            onClick={openInSquare}
                            className="flex items-center gap-2 px-4 py-2 text-sm bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors"
                        >
                            <Send className="w-4 h-4" />
                            Open in Square
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-10">
                <div className="space-y-8">
                    {/* Invoice Header */}
                    <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                                Invoice Details
                            </h2>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-zinc-500">Invoice #</span>
                                <span className="font-mono text-zinc-300">{invoice.invoiceNumber}</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">
                                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                                    Issue Date
                                </label>
                                <input
                                    type="date"
                                    value={invoice.issueDate}
                                    onChange={(e) => setInvoice({ ...invoice, issueDate: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">
                                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                                    Due Date
                                </label>
                                <input
                                    type="date"
                                    value={invoice.dueDate}
                                    onChange={(e) => setInvoice({ ...invoice, dueDate: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Client Info */}
                    <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 space-y-4">
                        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            Bill To
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">Client Name</label>
                                <input
                                    type="text"
                                    value={invoice.clientName}
                                    onChange={(e) => setInvoice({ ...invoice, clientName: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                                    placeholder="Client or Company Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    value={invoice.clientEmail}
                                    onChange={(e) => setInvoice({ ...invoice, clientEmail: e.target.value })}
                                    className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                                    placeholder="client@company.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-zinc-400 mb-1.5">Address</label>
                            <textarea
                                value={invoice.clientAddress}
                                onChange={(e) => setInvoice({ ...invoice, clientAddress: e.target.value })}
                                rows={2}
                                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                                placeholder="123 Main St, City, State ZIP"
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
                                className="flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                                Add Item
                            </button>
                        </div>

                        <div className="space-y-3">
                            {invoice.lineItems.map((item, index) => (
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
                                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                                            placeholder="Service or product"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        {index === 0 && (
                                            <label className="block text-xs text-zinc-500 mb-1">Qty/Hrs</label>
                                        )}
                                        <input
                                            type="number"
                                            min="0.5"
                                            step="0.5"
                                            value={item.quantity}
                                            onChange={(e) => updateLineItem(item.id, 'quantity', parseFloat(e.target.value) || 1)}
                                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
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
                                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                                        />
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        {index === 0 && <div className="h-5" />}
                                        <button
                                            onClick={() => removeLineItem(item.id)}
                                            className="p-2 text-zinc-500 hover:text-red-400 transition-colors"
                                            disabled={invoice.lineItems.length === 1}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="pt-4 border-t border-zinc-800/50 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Subtotal</span>
                                <span className="text-zinc-300">
                                    ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-zinc-500">Tax</span>
                                    <input
                                        type="number"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                        value={invoice.taxRate}
                                        onChange={(e) => setInvoice({ ...invoice, taxRate: parseFloat(e.target.value) || 0 })}
                                        className="w-16 bg-zinc-800/50 border border-zinc-700/50 rounded px-2 py-1 text-xs text-zinc-100 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                                    />
                                    <span className="text-zinc-500">%</span>
                                </div>
                                <span className="text-zinc-300">
                                    ${tax.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-zinc-700/50">
                                <span className="text-zinc-400 font-medium">Total Due</span>
                                <span className="text-2xl font-semibold text-zinc-100">
                                    ${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* Notes */}
                    <section className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 space-y-4">
                        <h2 className="text-sm font-medium text-zinc-400 uppercase tracking-wider">
                            Notes & Terms
                        </h2>
                        <textarea
                            value={invoice.notes}
                            onChange={(e) => setInvoice({ ...invoice, notes: e.target.value })}
                            rows={3}
                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                            placeholder="Payment terms, bank details, thank you message..."
                        />
                    </section>
                </div>
            </main>
        </div>
    );
}
