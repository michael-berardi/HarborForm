'use client';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen pt-28 md:pt-32 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <div className="max-w-4xl mx-auto pb-16 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        Privacy Policy
                    </h1>
                    <p className="text-xs md:text-sm uppercase tracking-wider mb-8 md:mb-12 font-medium" style={{ color: 'var(--text-muted)' }}>
                        Last updated: January 1, 2026
                    </p>

                    <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Information We Collect
                            </h2>
                            <p className="mb-4">
                                Liberty Design Studio collects information you provide directly when you use our services, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Contact information (name, email address, phone number)</li>
                                <li>Business information when you inquire about our services</li>
                                <li>Communications you send to us</li>
                                <li>Information collected through our scheduling integrations (Calendly, Cal.com)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                How We Use Your Information
                            </h2>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Communicate with you about projects, services, and inquiries</li>
                                <li>Send you updates and marketing communications (with your consent)</li>
                                <li>Analyze and improve the effectiveness of our website and services</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Cookies and Analytics
                            </h2>
                            <p>
                                We use standard analytics tools to understand how visitors interact with our website. This data is aggregated and does not personally identify individual users. You can control cookie settings through your browser preferences.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Third-Party Services
                            </h2>
                            <p className="mb-4">
                                We use third-party services to operate our business, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Vercel (website hosting)</li>
                                <li>Cal.com / Calendly (appointment scheduling)</li>
                                <li>Google Analytics (website analytics)</li>
                            </ul>
                            <p className="mt-4">
                                These services have their own privacy policies governing the use of your information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Data Retention
                            </h2>
                            <p>
                                We retain your information for as long as necessary to provide our services and fulfill the purposes described in this policy. Client project data is retained according to our contractual agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Your Rights
                            </h2>
                            <p>
                                You have the right to access, update, or delete your personal information. To exercise these rights, contact us at mike@libertydesign.studio.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                Contact Us
                            </h2>
                            <p>
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="mt-4 p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <p className="font-bold" style={{ color: 'var(--text-primary)' }}>Liberty Design Studio</p>
                                <p>Email: mike@libertydesign.studio</p>
                                <p>Phone: 941-479-1845</p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
