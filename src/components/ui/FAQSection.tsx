'use client';

const faqs = [
  {
    question: "How much do projects typically cost?",
    answer: "Every project is custom-scoped based on your goals and current state. After our free strategy call, you'll receive a detailed proposal with transparent pricing. We don't believe in one-size-fits-all packages."
  },
  {
    question: "How long does a typical project take?",
    answer: "We move fast — weeks, not months. Most website projects launch within 3-4 weeks. Complex systems may take 6-8 weeks. You'll have a clear timeline before we start."
  },
  {
    question: "Do you work with businesses outside of real estate?",
    answer: "Yes. While we have deep expertise in real estate, our operations-first methodology works for any business that wants measurable results. We've worked with professional services, SaaS, and e-commerce clients."
  },
  {
    question: "What if I'm not happy with the work?",
    answer: "We offer a satisfaction guarantee on all website projects. If you're not happy, we'll make it right. Our goal is a long-term partnership, not a quick transaction."
  },
  {
    question: "How involved do I need to be?",
    answer: "As much or as little as you want. Some clients prefer to be hands-on; others prefer to delegate entirely. We work independently and keep you informed without constant check-ins."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We prefer ongoing partnerships because they let us truly understand your brand. Most clients stay with us for years, not months. Maintenance, optimization, and growth are all part of what we do."
  },
  {
    question: "What makes Liberty different from other agencies?",
    answer: "We're operations-first. Our founder has Lean/Six Sigma methodology experience and applies it to digital marketing. We don't chase vanity metrics — if it doesn't move the needle, we don't do it."
  },
  {
    question: "Can I talk to a past client?",
    answer: "Yes. After our initial call, we're happy to connect you with references who can speak to our work and what it's like to partner with us."
  }
];

export const FAQSection = () => (
  <section className="py-24 px-6 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] transition-colors duration-300">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-[var(--text-primary)] transition-colors duration-300">Frequently Asked Questions</h2>
      <div className="grid gap-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--accent-primary)]/30">
            <summary className="p-6 font-semibold cursor-pointer list-none flex justify-between items-center text-[var(--text-primary)] transition-colors duration-300">
              {faq.question}
              <span className="text-[var(--text-muted)] group-open:rotate-45 transition-transform duration-300 text-xl">+</span>
            </summary>
            <p className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed transition-colors duration-300">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
