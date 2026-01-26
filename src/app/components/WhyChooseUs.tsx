import { TrendingUp, Users, Shield, Zap, Award, Headphones } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "15+ years of consistent profits with documented performance history. Our traders have generated over $150M in profits for our investors.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Expert Trading Team",
    description: "Professional traders with certifications from top financial institutions. Combined 100+ years of forex market experience.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Advanced risk protocols protect your capital. We never risk more than 2% per trade. Stop-loss mechanisms on every position.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Fast Withdrawals",
    description: "Get your profits within 24 hours. No hidden fees, no withdrawal limits. Your money, your control, anytime you want it.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "Award-Winning Platform",
    description: "Recognized as 'Best Forex Investment Platform 2023-2024'. Featured in Forbes, Bloomberg, and Financial Times.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated account managers available round the clock. Live chat, email, and phone support in 15+ languages.",
    color: "from-pink-500 to-rose-500"
  }
];

export function WhyChooseUs() {
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
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with human expertise to deliver consistent, 
            reliable returns while keeping your investments 100% secure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${feature.color} rounded-2xl p-4 inline-block mb-4`}>
                <feature.icon className="size-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            🏆 Industry Recognition
          </h3>
          <p className="text-xl text-violet-100 mb-6 max-w-3xl mx-auto">
            Trusted by industry leaders and recognized globally for excellence in automated forex trading
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1">A+</div>
              <div className="text-sm text-violet-200">BBB Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4.9/5</div>
              <div className="text-sm text-violet-200">TrustPilot Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">ISO 27001</div>
              <div className="text-sm text-violet-200">Certified</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-sm text-violet-200">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
