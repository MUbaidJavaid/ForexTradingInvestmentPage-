import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How does the investment process work?",
    answer: "Simply register, deposit your investment amount, and our expert traders will handle everything. We use advanced algorithms combined with human expertise to trade forex markets 24/7. You can monitor your profits in real-time through your dashboard and withdraw anytime."
  },
  {
    question: "What is the minimum investment required?",
    answer: "You can start investing with as little as $500. This allows you to test our service and see real results before scaling up your investment. There's no maximum limit - invest what you're comfortable with."
  },
  {
    question: "How much profit can I expect?",
    answer: "Based on our historical performance, investors typically see monthly returns between 15-40%. However, returns vary based on market conditions. We prioritize consistent, sustainable growth over high-risk strategies."
  },
  {
    question: "How quickly can I withdraw my profits?",
    answer: "Withdrawals are processed within 24 hours. There are no withdrawal fees or penalties. You can withdraw your profits anytime while keeping your principal invested, or withdraw everything at once."
  },
  {
    question: "Is my money safe and secure?",
    answer: "Absolutely. Your funds are held in segregated accounts with tier-1 banking partners, protected by 256-bit SSL encryption, and covered by insurance up to $500,000. We undergo regular third-party security audits to ensure maximum protection."
  },
  {
    question: "Do I need trading experience?",
    answer: "No experience required! That's the beauty of our service. Our professional traders handle all trading decisions. You simply invest and collect profits. We provide educational resources if you want to learn, but it's not necessary."
  },
  {
    question: "What makes you different from other platforms?",
    answer: "We combine 15+ years of proven track record, transparent real-time reporting, advanced AI technology with human oversight, and exceptional customer service. Our traders never risk more than 2% per trade, ensuring your capital is protected."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees ever. We operate on a performance fee model - we only profit when you profit. There's no registration fee, no monthly fees, and no withdrawal fees. Our success is directly tied to yours."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 to-violet-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about investing with us.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900 flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="size-6 text-violet-600" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-8 max-w-2xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-3">
              Still Have Questions?
            </h3>
            <p className="text-violet-100 mb-6">
              Our support team is available 24/7 to help you. Get in touch and we'll respond within minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:support@forexinvest.com" className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors">
                📧 Email Support
              </a>
              <a href="tel:+1-800-FOREX-24" className="bg-violet-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-800 transition-colors">
                📞 Call Us 24/7
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
