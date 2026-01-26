import { UserPlus, Wallet, BarChart3, DollarSign } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Register",
    description: "Create your free account in under 2 minutes. No hidden fees, no credit card required. Simple registration form with email verification.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Wallet,
    title: "Invest Your Capital",
    description: "Deposit your investment amount securely. Start with as little as $500. Choose from multiple payment methods including bank transfer, cards, and crypto.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    icon: BarChart3,
    title: "We Trade For You",
    description: "Our expert traders use AI-powered algorithms and 15+ years of experience to trade 24/7. You sit back and relax while we maximize your returns.",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Collect Profits",
    description: "Watch your profits grow daily. Withdraw anytime with no penalties. Average monthly returns of 15-40%. Fast withdrawals processed within 24 hours.",
    color: "from-orange-500 to-red-500"
  }
];

export function HowItWorks() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-2xl text-violet-300 max-w-2xl mx-auto font-semibold">
            Just Invest and Rest is Our Work
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-3">
            We've simplified forex investing into 4 easy steps. From registration to profit withdrawal, 
            our team handles all the complex trading while you enjoy consistent returns.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className={`bg-gradient-to-r ${step.color} rounded-full size-20 flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <step.icon className="size-10 text-white" />
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-violet-500/40 text-violet-100 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                    Step {step.id}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="text-violet-400 text-5xl animate-pulse">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">💼</span> Hands-Free Investing
            </h3>
            <p className="text-slate-300 text-lg mb-4">
              Our professional trading team with 15+ years of combined experience manages your investments 24/7. 
              Advanced AI algorithms combined with human expertise ensure optimal trading decisions.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>24/7 automated trading systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Real-time market analysis and execution</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span>Risk management protocols in place</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">📈</span> Guaranteed Returns
            </h3>
            <p className="text-slate-300 text-lg mb-4">
              Average monthly returns of 15-40% based on historical performance. Your profits are automatically calculated and available for withdrawal anytime.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-400">15-40%</div>
                <div className="text-sm text-slate-300">Monthly Returns</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-violet-400">24hrs</div>
                <div className="text-sm text-slate-300">Withdrawal Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
