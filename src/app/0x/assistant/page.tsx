'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Bot,
    ChevronLeft,
    Sparkles,
    Calendar as CalendarIcon,
    Clock,
    CheckCircle2,
    ExternalLink,
    MessageSquare,
    FileSpreadsheet,
    Receipt
} from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { DataStore, Task } from '@/lib/data-store';

export default function AssistantPanel() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

    useEffect(() => {
        setTasks(DataStore.getTasks().filter(t => t.assignedTo === 'nico'));
    }, []);

    const nicoTasks = tasks.filter(t => t.assignedTo === 'nico');
    const todayTasks = nicoTasks.filter(t =>
        format(new Date(t.createdAt), 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')
    );

    const modifiers = {
        hasTask: nicoTasks.map(t => new Date(t.createdAt))
    };

    const modifiersStyles = {
        hasTask: {
            fontWeight: 'bold',
            color: '#6366f1',
            textDecoration: 'underline'
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Nico's Workspace</h1>
                            <p className="text-zinc-500 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                Simulation Mode Active
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Link href="/0x" className="px-4 py-2 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-400 hover:text-white hover:border-zinc-700 transition-all flex items-center gap-2">
                            <ChevronLeft className="w-4 h-4" />
                            Admin Console
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Column: Quick Links & Stats */}
                    <div className="space-y-6">
                        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-xl">
                            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">Internal Shortcuts</h3>
                            <div className="space-y-3">
                                <a href="slack://open" className="group flex items-center justify-between p-3 rounded-xl bg-zinc-950/50 border border-zinc-900 hover:border-indigo-500/30 transition-all">
                                    <div className="flex items-center gap-3">
                                        <MessageSquare className="w-4 h-4 text-indigo-400" />
                                        <span className="text-sm font-medium text-zinc-300">Open Slack</span>
                                    </div>
                                    <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-indigo-400" />
                                </a>
                                <a href="notion://open" className="group flex items-center justify-between p-3 rounded-xl bg-zinc-950/50 border border-zinc-900 hover:border-indigo-500/30 transition-all">
                                    <div className="flex items-center gap-3">
                                        <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                                        <span className="text-sm font-medium text-zinc-300">Open Notion</span>
                                    </div>
                                    <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-emerald-400" />
                                </a>
                                <Link href="/0x/billing-helper" className="group flex items-center justify-between p-3 rounded-xl bg-zinc-950/50 border border-zinc-900 hover:border-amber-500/30 transition-all">
                                    <div className="flex items-center gap-3">
                                        <Receipt className="w-4 h-4 text-amber-400" />
                                        <span className="text-sm font-medium text-zinc-300">Billing Helper</span>
                                    </div>
                                    <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-400" />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-xl">
                            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Availability</h3>
                            <div className="flex items-center gap-3 text-green-400">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm font-bold">Sync Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Calendar & Agenda */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-xl">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4 text-indigo-500" />
                                    Work Calendar
                                </h3>
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                                    {format(new Date(), 'MMMM yyyy')}
                                </div>
                            </div>

                            <div className="flex justify-center assistant-calendar">
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    modifiers={modifiers}
                                    modifiersStyles={modifiersStyles}
                                    className="border-none text-zinc-400"
                                />
                            </div>
                        </div>

                        <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 backdrop-blur-xl">
                            <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2 mb-6">
                                <Clock className="w-4 h-4 text-purple-500" />
                                Today's Agenda
                            </h3>
                            <div className="space-y-4">
                                {todayTasks.length === 0 ? (
                                    <div className="py-8 text-center border border-dashed border-zinc-800 rounded-xl">
                                        <p className="text-zinc-600 text-sm italic">No tasks scheduled for today.</p>
                                    </div>
                                ) : (
                                    todayTasks.map(task => (
                                        <div key={task.id} className="flex items-center gap-4 p-4 bg-zinc-950/50 border border-zinc-900 rounded-xl">
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50" />
                                            <span className="text-sm font-medium text-zinc-300">{task.title}</span>
                                            <div className="flex-1" />
                                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900">{task.status}</span>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Recent Activity */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 rounded-2xl p-6">
                            <h3 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-6">Assistant Insights</h3>
                            <div className="space-y-6 text-sm">
                                <div>
                                    <p className="text-zinc-100 font-semibold mb-1">Efficiency Score</p>
                                    <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-indigo-500 h-full w-[88%]" />
                                    </div>
                                    <p className="text-[10px] text-zinc-500 mt-2 tracking-tight">88.4% — Exceeding Studio Standards</p>
                                </div>
                                <div className="pt-4 border-t border-indigo-500/10">
                                    <div className="flex items-center gap-2 text-zinc-300 font-bold text-xs uppercase mb-3">
                                        <Sparkles className="w-3 h-3 text-indigo-400" />
                                        Next Up
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed">
                                        Reviewing Square Invoice discrepancies and preparing weekly studio insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .assistant-calendar .rdp {
                    --rdp-cell-size: 40px;
                    --rdp-accent-color: #6366f1;
                    --rdp-background-color: #1a1a1a;
                    margin: 0;
                }
                .assistant-calendar .rdp-day_selected {
                    background-color: var(--rdp-accent-color) !important;
                    color: white !important;
                    font-weight: bold;
                }
                .assistant-calendar .rdp-button:hover:not(.rdp-day_selected) {
                    background-color: #27272a !important;
                }
            `}</style>
        </div>
    );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
