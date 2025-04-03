// app/components/faqData.ts

export interface QAItem {
    question: string;
    answer: string;
}

const faqData: QAItem[] = [
    {
        question: "What services do you offer?",
        answer:
            "We specialize in brand identity design, social media designs, and website development, tailored to elevate your brand's visual presence.",
    },
    {
        question: "What is included in brand identity design?",
        answer:
            "Our brand identity services include logo design, color palette selection, typography, business cards, brand guidelines, and other visual assets to ensure consistent branding.",
    },
    {
        question: "What types of websites do you design?",
        answer:
            "We design custom websites ranging from personal portfolios to business websites, e-commerce stores, and landing pages optimized for performance and user experience.",
    },
    {
        question: "How does the design process work?",
        answer: "- **Consultation:** We discuss your brand goals and design preferences.\n- **Research & Strategy:** We analyze your industry and competitors to develop a unique concept.\n- **Concept Development:** Initial design drafts are created for your feedback.\n- **Revisions:** We refine the design based on your input.\n- **Final Delivery:** Upon approval, all design files are delivered, and for websites, the site goes live.",
    },
    {
        question: "How long does the design process take?",
        answer: `Timelines vary depending on the project scope: \n- **Brand Identity Design:** 1–3 weeks \n- **Website Design & Development:** 2–6 weeks`,
    },
    {
        question: "Can I request revisions?",
        answer:
            "Yes! We offer a set number of revisions during the design process to ensure you're satisfied with the final product.",
    },
    {
        question: "How do I make a payment?",
        answer:
            "Payments can be made securely via Wallet Number or InstaPay (using the provided code).\nyou can select your preferd payment method [here](/contact/purchasing).",
    },
    {
        question: "Is a deposit required before starting?",
        answer:
            "Yes, a **50% deposit** is required to begin the project. The remaining balance is paid upon project completion before the final files are delivered or the website goes live.",
    },
    {
        question: "Do you offer ongoing support after the website is launched?",
        answer:
            "Yes, we offer maintenance and support packages for website updates, troubleshooting, and performance monitoring.",
    },
    {
        question: "How can I get started?",
        answer:
            "Simply reach out via our contact form [here](/contact), or message us directly via [soical media](/contact/soical) to schedule a consultation.",
    },
];

export default faqData;  