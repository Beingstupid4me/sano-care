"use client";

import { motion } from "framer-motion";
import { Pill, HeartPulse, Ambulance, Award } from "lucide-react";

const accreditations = [
  { icon: Pill, name: "MediCert" },
  { icon: HeartPulse, name: "SafeCare" },
  { icon: Ambulance, name: "GlobalHealth" },
  { icon: Award, name: "TopHospital" },
];

export function Accreditations() {
  return (
    <section className="border-t border-slate-200 bg-white/50 py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.p
          className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-text-secondary/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Accredited by Leading Health Organizations
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-12 lg:gap-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {accreditations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                className="flex items-center gap-3 group cursor-pointer opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="w-10 h-10 text-slate-600 group-hover:text-primary transition-colors" />
                <span className="font-bold text-xl font-serif text-text-main">{item.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
