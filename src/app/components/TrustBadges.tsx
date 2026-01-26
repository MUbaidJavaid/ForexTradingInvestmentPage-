import { Shield, Award, Lock, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  {
    icon: Shield,
    title: "SSL Secured",
    description: "Bank-level encryption"
  },
  {
    icon: Award,
    title: "Licensed & Regulated",
    description: "Fully compliant"
  },
  {
    icon: Lock,
    title: "Funds Protected",
    description: "Insurance backed"
  },
  {
    icon: CheckCircle,
    title: "Verified Platform",
    description: "Trusted by 10,000+"
  }
];

export function TrustBadges() {
  return (
    <div className="bg-white/5 backdrop-blur-sm py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full p-4 mb-3">
                <badge.icon className="size-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-1">{badge.title}</h4>
              <p className="text-sm text-violet-200">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
