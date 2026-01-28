"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Patient-First",
    description:
      "We prioritize your comfort and understanding, ensuring every question is answered with patience.",
    points: ["Extended consultation times", "Personalized care plans"],
  },
  {
    icon: FlaskConical,
    title: "Advanced Tech",
    description:
      "Our facilities are equipped with the latest diagnostic machinery for faster, more accurate results.",
    points: ["In-house laboratory", "Digital health integration"],
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description:
      "Healthcare doesn't stop at 5 PM. Our team is available round-the-clock for your urgent needs.",
    points: ["Telemedicine support", "Urgent care facilities"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section className="py-24 lg:py-32 relative" id="services">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
              Why Choose Sano Care
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-text-main">
              Integrated Care Model
            </h2>
          </motion.div>
          <motion.a
            href="#"
            className="group flex items-center gap-2 pb-1 border-b border-text-main text-text-main font-medium hover:text-primary hover:border-primary transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Explore our philosophy
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="group relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="size-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 text-text-main">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
