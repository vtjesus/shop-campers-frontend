import { useState } from "react";

// Define the type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the return policy?",
    answer:
      "You can return any unused item within 30 days of purchase for a full refund.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-7 business days depending on your location.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping fees may apply.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order has shipped, you'll receive a tracking number via email.",
  },
  {
    question: "Can I cancel or change my order?",
    answer:
      "Orders can be changed or cancelled within 24 hours of purchase. After that, they are processed for shipping.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-2">
          Find answers to common questions below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-6 border-b border-gray-200">
            <button
              className="w-full text-left focus:outline-none py-4"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="flex justify-between items-center text-lg font-semibold text-gray-700">
                {faq.question}
                <span>
                  {activeIndex === index ? (
                    <svg
                      className="w-5 h-5 transform rotate-180 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      ></path>
                    </svg>
                  )}
                </span>
              </h3>
            </button>
            {activeIndex === index && (
              <div className="text-gray-600 transition-all duration-300 ease-in-out">
                <p className="pb-4">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
