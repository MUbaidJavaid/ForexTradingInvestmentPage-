import { motion } from "motion/react";
import { DollarSign, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "10,000+",
    label: "Active Investors",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: DollarSign,
    value: "$150M+",
    label: "Total Invested",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    icon: TrendingUp,
    value: "32%",
    label: "Avg. Returns",
    color: "from-violet-500 to-purple-500"
  },
  {
    id: 4,
    icon: Award,
    value: "99.2%",
    label: "Success Rate",
    color: "from-orange-500 to-red-500"
  }
];

export function Stats() {
  return (
    <div className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-full size-16 lg:size-20 flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="size-8 lg:size-10 text-white" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-violet-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
