'use client';
import { motion } from 'framer-motion';

export default function TermsOfService() {
    return (
        <main className="min-h-screen pt-28 md:pt-32 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <div className="max-w-4xl mx-auto pb-16 md:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        Terms of Service
                    </h1>
                    <p className="text-xs md:text-sm uppercase tracking-wider mb-8 md:mb-12 font-medium" style={{ color: 'var(--text-muted)' }}>
                        Last updated: January 1, 2026
                    </p>

                    <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                1. Agreement to Terms
                            </h2>
                            <p>
                                By accessing or using the Liberty Design Studio website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                2. Services
                            </h2>
                            <p className="mb-4">
                                Liberty Design Studio provides digital design, development, marketing, and consulting services. Specific terms for client projects are governed by individual service agreements.
                            </p>
                            <p>
                                The information on this website is for general informational purposes and does not constitute professional advice. Specific project outcomes depend on individual circumstances and cannot be guaranteed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                3. Intellectual Property
                            </h2>
                            <p className="mb-4">
                                All content on this website, including text, graphics, logos, and code, is the property of Liberty Design Studio unless otherwise indicated. You may not reproduce, distribute, or create derivative works without written permission.
                            </p>
                            <p>
                                Client work and deliverables are governed by individual project agreements, which typically transfer ownership upon full payment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                4. User Conduct
                            </h2>
                            <p>When using our website and services, you agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe upon the rights of others</li>
                                <li>Transmit harmful code or interfere with our systems</li>
                                <li>Misrepresent your identity or affiliation</li>
                                <li>Use our services for any unlawful purpose</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                5. Payment Terms
                            </h2>
                            <p>
                                Payment terms for services are specified in individual project agreements. Standard terms include deposits before work begins and milestone payments throughout the project lifecycle. Late payments may result in project delays or suspension of services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                6. Satisfaction Guarantee
                            </h2>
                            <p>
                                We stand behind our work. If you are not satisfied with deliverables, we will work with you to address concerns within the scope of the agreed project. Specific guarantee terms are outlined in individual service agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                7. Limitation of Liability
                            </h2>
                            <p>
                                Liberty Design Studio is not liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability is limited to the amount paid for the specific services at issue.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                8. Termination
                            </h2>
                            <p>
                                We may terminate or suspend access to our services at any time for conduct that violates these terms. Refund policies for terminated projects are governed by individual service agreements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                9. Changes to Terms
                            </h2>
                            <p>
                                We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                                10. Contact
                            </h2>
                            <p>
                                For questions about these Terms of Service, contact us:
                            </p>
                            <div className="mt-4 p-6 rounded-xl border border-white/10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                                <p className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Liberty Design Studio</p>
                                <p className="mb-1">
                                    <span style={{ color: 'var(--text-secondary)' }}>Email: </span>
                                    <a href="mailto:mike@libertydesign.studio" className="text-blue-500 hover:text-blue-400 hover:underline transition-colors">
                                        mike@libertydesign.studio
                                    </a>
                                </p>
                                <p>
                                    <span style={{ color: 'var(--text-secondary)' }}>Phone: </span>
                                    <a href="tel:9414791845" className="text-blue-500 hover:text-blue-400 hover:underline transition-colors">
                                        941-479-1845
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
