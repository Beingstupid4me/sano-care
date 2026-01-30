"use client";

import { motion } from "framer-motion";
import { Home, Building2, Stethoscope, Video, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Healthcare at Home",
    description:
      "Qualified doctors visit patients at home for primary consultations, vitals checks, injections, and routine checkups.",
    features: ["Doctor Visits", "Vitals Check", "Wound Dressing"],
  },
  {
    icon: Building2,
    title: "Community Infirmary",
    description:
      "Tech-enabled kiosks installed within gated societies providing on-demand monitoring and preventive screenings.",
    features: ["Smart Kiosks", "Preventive Health", "Tele-consult Integration"],
  },
  {
    icon: Stethoscope,
    title: "Paramedic & Nursing",
    description:
      "Trained professionals for blood sample collection, injections, dressing changes, and chronic disease support.",
    features: ["Lab Collection", "Injections", "Diabetes Support"],
  },
  {
    icon: Video,
    title: "Teleconsultations",
    description:
      "Virtual access to licensed doctors for general health concerns, prescription refills, and follow-up guidance.",
    features: ["Video Call", "Digital Rx", "Follow-ups"],
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
              Our Services
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium text-text-main">
              Integrated Care Model
            </h2>
          </motion.div>
          <motion.a
            href="/coming-soon/about"
            className="group flex items-center gap-2 pb-1 border-b border-text-main text-text-main font-medium hover:text-primary hover:border-primary transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Learn more about us
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="group relative p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2 text-text-main">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 text-xs text-text-secondary">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {feature}
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
