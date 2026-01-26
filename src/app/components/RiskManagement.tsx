import { Shield, Lock, TrendingUp, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

export function RiskManagement() {
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
            Your Security is Our Priority
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We implement multiple layers of protection to safeguard your investments and ensure consistent, 
            risk-managed returns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30"
          >
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full size-16 flex items-center justify-center mb-6">
              <Shield className="size-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Advanced Risk Protocols
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Maximum 2% risk per trade - protecting your capital from significant losses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Automatic stop-loss on every position - no trade runs unchecked</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Diversified portfolio across 20+ currency pairs - spreading risk intelligently</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Real-time monitoring by professional traders - human oversight on all trades</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Daily profit limits to secure gains - protecting your accumulated returns</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full size-16 flex items-center justify-center mb-6">
              <Lock className="size-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Fund Security Measures
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Segregated accounts - your funds kept separate from company operations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Tier-1 banking partners - working with world's most trusted financial institutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>256-bit SSL encryption - military-grade security for all transactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Insurance coverage up to $500,000 - additional protection layer</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Regular third-party audits - transparent verification of our practices</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30"
        >
          <div className="flex items-start gap-6">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full size-16 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="size-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Transparent Performance Tracking
              </h3>
              <p className="text-slate-300 text-lg mb-4">
                Monitor your investments in real-time with our advanced dashboard. View detailed trade history, 
                profit/loss statements, and performance analytics updated every second.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-violet-400">Real-time</div>
                  <div className="text-sm text-slate-300">Updates</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">Daily</div>
                  <div className="text-sm text-slate-300">Reports</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-slate-300">Transparent</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">24/7</div>
                  <div className="text-sm text-slate-300">Access</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="size-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div className="text-slate-300">
              <p className="font-semibold text-white mb-2">Investment Disclaimer:</p>
              <p className="text-sm">
                Trading forex involves risk. While we employ sophisticated risk management strategies and have a proven track record, 
                past performance does not guarantee future results. Only invest what you can afford to lose. 
                We recommend starting with our minimum investment of $500 to test our service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
