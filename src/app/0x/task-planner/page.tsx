'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ChevronLeft,
    Plus,
    CheckCircle2,
    Circle,
    User,
    Calendar as CalendarIcon,
    AlertCircle,
    Clock,
    Briefcase,
    Search,
    Filter,
    MoreVertical,
    ChevronRight,
    ClipboardCheck,
    Building2,
    AlertTriangle,
    History,
    Archive,
    Trash2,
    ExternalLink
} from 'lucide-react';
import { DataStore, Task } from '@/lib/data-store';
import { clients as clientList } from '@/lib/clients';

const PRIORITIES = {
    high: { label: 'High', color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/20', icon: AlertTriangle },
    medium: { label: 'Medium', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: AlertCircle },
    low: { label: 'Low', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: Clock }
};

const STATUS_CONFIG = {
    'pending': { label: 'To-Do', color: 'text-zinc-400' },
    'in-progress': { label: 'In Progress', color: 'text-blue-400' },
    'completed': { label: 'Completed', color: 'text-emerald-400' },
    'blocked': { label: 'Blocked', color: 'text-rose-400' }
};

export default function TaskPlanner() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterClient, setFilterClient] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');

    // New Task Form State
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [newClient, setNewClient] = useState('pep');
    const [newProperty, setNewProperty] = useState('');
    const [newPriority, setNewPriority] = useState<'high' | 'medium' | 'low'>('medium');
    const [newAssignedTo, setNewAssignedTo] = useState<'admin' | 'nico'>('nico');

    useEffect(() => {
        setTasks(DataStore.getTasks());
    }, []);

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesClient = filterClient === 'all' || task.client === filterClient;
            const matchesStatus = filterStatus === 'all' ? task.status !== 'completed' : task.status === filterStatus;

            return matchesSearch && matchesClient && matchesStatus;
        }).sort((a, b) => {
            const priorityWeight = { high: 0, medium: 1, low: 2 };
            return priorityWeight[a.priority] - priorityWeight[b.priority];
        });
    }, [tasks, searchQuery, filterClient, filterStatus]);

    const stats = useMemo(() => {
        const active = tasks.filter(t => t.status !== 'completed').length;
        const high = tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length;
        const completedToday = tasks.filter(t =>
            t.status === 'completed' &&
            t.completedAt &&
            new Date(t.completedAt).toDateString() === new Date().toDateString()
        ).length;
        return { active, high, completedToday };
    }, [tasks]);

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle.trim()) return;

        DataStore.addTask({
            title: newTitle,
            description: newDesc,
            client: newClient,
            property: newProperty,
            priority: newPriority,
            assignedTo: newAssignedTo,
            notes: ''
        });

        setTasks(DataStore.getTasks());
        setNewTitle('');
        setNewDesc('');
        setNewProperty('');
        setIsAdding(false);
    };

    const handleStatusChange = (id: string, status: Task['status']) => {
        const updated = DataStore.updateTask(id, {
            status,
            completedAt: status === 'completed' ? new Date().toISOString() : undefined
        });

        if (status === 'completed' && updated) {
            // Logic for pushing to billing reference
            DataStore.addBillingItem({
                taskId: updated.id,
                title: updated.title,
                client: updated.client,
                property: updated.property,
                duration: 1, // Default to 1 hour, can be adjusted in billing helper
                minutes: 60,
                isFixedRate: false,
                date: new Date().toISOString()
            });
        }

        setTasks(DataStore.getTasks());
    };

    const selectedClientData = clientList.find(c => c.id === newClient);

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans transition-colors duration-300">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px]" />
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
                            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <ClipboardCheck className="w-6 h-6 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Task Planner.</h1>
                        </div>
                        <p className="text-[var(--text-secondary)] text-lg font-medium">Coordinate studio operations and deliverables.</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:flex gap-8 mr-8 border-r border-[var(--border-subtle)] pr-8">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] mb-1">Active Tasks</p>
                                <p className="text-2xl font-bold">{stats.active}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-rose-500/80 mb-1">High Priority</p>
                                <p className="text-2xl font-bold text-rose-500">{stats.high}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-500/80 mb-1">Done Today</p>
                                <p className="text-2xl font-bold text-emerald-500">{stats.completedToday}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsAdding(!isAdding)}
                            className="px-6 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full font-bold text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-black/10"
                        >
                            <Plus className="w-4 h-4" />
                            New Task
                        </button>
                    </div>
                </div>

                {/* Controls Bar */}
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] group-focus-within:text-blue-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search tasks, descriptions, or properties..."
                            className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl pl-12 pr-6 py-4 text-sm font-medium focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="relative min-w-[180px]">
                            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                            <select
                                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl pl-12 pr-6 py-4 text-sm font-bold appearance-none focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer"
                                value={filterClient}
                                onChange={(e) => setFilterClient(e.target.value)}
                            >
                                <option value="all">All Clients</option>
                                {clientList.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </div>
                        <div className="relative min-w-[180px]">
                            <select
                                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl px-6 py-4 text-sm font-bold appearance-none focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer text-center"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                            >
                                <option value="all">Active Only</option>
                                <option value="pending">To-Do</option>
                                <option value="in-progress">In Progress</option>
                                <option value="blocked">Blocked</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isAdding && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -20, height: 0 }}
                            className="overflow-hidden mb-8"
                        >
                            <form onSubmit={handleAddTask} className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-3xl p-8 shadow-2xl">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] mb-2 block">Task Title</label>
                                            <input
                                                autoFocus
                                                placeholder="e.g. Update 69 Mercer description"
                                                className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500/50 transition-all"
                                                value={newTitle}
                                                onChange={(e) => setNewTitle(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] mb-2 block">Description (Optional)</label>
                                            <textarea
                                                placeholder="Specific details or output format..."
                                                className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500/50 transition-all min-h-[100px] resize-none"
                                                value={newDesc}
                                                onChange={(e) => setNewDesc(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] mb-2 block">Client</label>
                                            <select
                                                className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm font-bold appearance-none cursor-pointer"
                                                value={newClient}
                                                onChange={(e) => {
                                                    setNewClient(e.target.value);
                                                    setNewProperty('');
                                                }}
                                            >
                                                {clientList.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] mb-2 block">Property (Optional)</label>
                                            <select
                                                className="w-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm font-bold appearance-none cursor-pointer disabled:opacity-30"
                                                value={newProperty}
                                                onChange={(e) => setNewProperty(e.target.value)}
                                                disabled={!selectedClientData?.typicalProperties}
                                            >
                                                <option value="">N/A</option>
                                                {selectedClientData?.typicalProperties?.map(p => <option key={p} value={p}>{p}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] mb-2 block">Priority</label>
                                            <div className="flex bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl p-1">
                                                {(['low', 'medium', 'high'] as const).map(p => (
                                                    <button
                                                        key={p}
                                                        type="button"
                                                        onClick={() => setNewPriority(p)}
                                                        className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${newPriority === p ? 'bg-[var(--bg-tertiary)] text-white' : 'text-[var(--text-muted)]'}`}
                                                    >
                                                        {p}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-muted)] mb-2 block">Assignment</label>
                                            <div className="flex bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl p-1">
                                                {(['admin', 'nico'] as const).map(u => (
                                                    <button
                                                        key={u}
                                                        type="button"
                                                        onClick={() => setNewAssignedTo(u)}
                                                        className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${newAssignedTo === u ? 'bg-[var(--bg-tertiary)] text-white' : 'text-[var(--text-muted)]'}`}
                                                    >
                                                        {u === 'admin' ? 'Owner' : 'Nico'}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4 border-t border-[var(--border-subtle)] pt-8">
                                    <button
                                        type="button"
                                        onClick={() => setIsAdding(false)}
                                        className="px-6 py-2 text-sm font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-500 transition-all"
                                    >
                                        Create Task
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Task List */}
                <div className="space-y-4">
                    {filteredTasks.length === 0 ? (
                        <div className="text-center py-32 border-2 border-dashed border-[var(--border-subtle)] rounded-[40px] bg-[var(--bg-secondary)]/30">
                            <div className="w-16 h-16 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-3xl flex items-center justify-center mx-auto mb-6">
                                <Archive className="w-8 h-8 text-[var(--text-muted)]" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Workspace Clear.</h3>
                            <p className="text-[var(--text-muted)] max-w-xs mx-auto">No tasks match your current filters. Add a new task to get moving.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-4">
                            {filteredTasks.map((task) => {
                                const PriorityIcon = PRIORITIES[task.priority].icon;
                                const clientName = clientList.find(c => c.id === task.client)?.name || task.client;

                                return (
                                    <motion.div
                                        layout
                                        key={task.id}
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={`group p-6 rounded-3xl border transition-all duration-300 bg-[var(--bg-secondary)] ${task.status === 'completed' ? 'opacity-50 grayscale border-transparent' : 'border-[var(--border-subtle)] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-black/20'}`}
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="flex flex-col gap-3">
                                                <button
                                                    onClick={() => handleStatusChange(task.id, task.status === 'completed' ? 'pending' : 'completed')}
                                                    className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all ${task.status === 'completed' ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-[var(--border-default)] group-hover:border-blue-500/50 text-transparent hover:text-[var(--text-muted)]'}`}
                                                >
                                                    <CheckCircle2 className="w-6 h-6" strokeWidth={task.status === 'completed' ? 3 : 1.5} />
                                                </button>

                                                <div className="flex flex-col items-center gap-1">
                                                    <div className={`w-1 h-8 rounded-full ${task.status === 'in-progress' ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-[var(--border-subtle)]'}`} />
                                                </div>
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                    <h3 className={`text-xl font-bold tracking-tight transition-all ${task.status === 'completed' ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-primary)]'}`}>
                                                        {task.title}
                                                    </h3>

                                                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${PRIORITIES[task.priority].bg} ${PRIORITIES[task.priority].color} ${PRIORITIES[task.priority].border} border`}>
                                                        <PriorityIcon className="w-3 h-3" />
                                                        {PRIORITIES[task.priority].label}
                                                    </div>

                                                    {task.status !== 'completed' && task.status !== 'pending' && (
                                                        <div className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20">
                                                            {STATUS_CONFIG[task.status].label}
                                                        </div>
                                                    )}
                                                </div>

                                                {task.description && (
                                                    <p className={`text-sm mb-6 leading-relaxed max-w-3xl ${task.status === 'completed' ? 'text-[var(--text-muted)]' : 'text-[var(--text-secondary)]'}`}>
                                                        {task.description}
                                                    </p>
                                                )}

                                                <div className="flex flex-wrap items-center gap-6">
                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                                                        <Building2 className="w-3.5 h-3.5 text-blue-500" />
                                                        {clientName}
                                                        {task.property && <span className="text-[var(--text-primary)]">— {task.property}</span>}
                                                    </div>

                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                                                        <User className="w-3.5 h-3.5 text-purple-500" />
                                                        {task.assignedTo === 'admin' ? 'Owner' : 'Nico'}
                                                    </div>

                                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                                                        <Clock className="w-3.5 h-3.5 text-emerald-500" />
                                                        {new Date(task.createdAt).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end gap-2">
                                                {task.status !== 'completed' && (
                                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={() => handleStatusChange(task.id, 'in-progress')}
                                                            className="p-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-blue-500/50 text-[var(--text-muted)] hover:text-blue-500 transition-all shadow-sm"
                                                            title="Set In Progress"
                                                        >
                                                            <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => handleStatusChange(task.id, 'blocked')}
                                                            className="p-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-rose-500/50 text-[var(--text-muted)] hover:text-rose-500 transition-all shadow-sm"
                                                            title="Mark Blocked"
                                                        >
                                                            <AlertTriangle className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                DataStore.deleteTask(task.id);
                                                                setTasks(DataStore.getTasks());
                                                            }}
                                                            className="p-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] hover:border-rose-500/50 text-[var(--text-muted)] hover:text-rose-500 transition-all shadow-sm"
                                                            title="Delete Task"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                )}

                                                {task.status === 'completed' && (
                                                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                                                        <History className="w-3 h-3" />
                                                        Archiving to Billing
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
