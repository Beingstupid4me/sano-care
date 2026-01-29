"use client";

import { motion } from "framer-motion";

const journeySteps = [
  {
    number: 1,
    title: "Book Your Visit",
    description:
      "Share your details and preferred time slot. Our care coordinator contacts you within 30 minutes to understand your needs.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: 2,
    title: "Doctor at Your Doorstep",
    description:
      "A verified doctor arrives at your home with necessary equipment for consultation, vitals check, and initial diagnosis.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  },
  {
    number: 3,
    title: "Complete Care & Follow-up",
    description:
      "Receive digital prescription, lab sample collection at home if needed, and ongoing support for your recovery journey.",
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b89?q=80&w=800&auto=format&fit=crop",
  },
];

export function Journey() {
  return (
    <section className="py-24 bg-surface-light relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
            How It Works
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-text-main">
            Your Care Journey
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            From booking to recovery, healthcare has never been this convenient.
            We bring the clinic to you.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Text Content */}
                  <div
                    className={`lg:w-1/2 order-2 ${
                      isEven ? "lg:order-1 lg:text-right" : "lg:order-2 lg:text-left"
                    } pl-12 lg:pl-0`}
                  >
                    <h3 className="font-serif text-2xl font-bold text-text-main">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-text-secondary">
                      {step.description}
                    </p>
                  </div>

                  {/* Number Circle */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-1/2 lg:-translate-y-1/2 z-10">
                    <motion.div
                      className={`size-9 rounded-full ${
                        index === 0
                          ? "bg-primary text-white"
                          : "bg-white text-text-main border-4 border-slate-200"
                      } shadow-lg flex items-center justify-center text-sm font-bold`}
                      whileInView={{
                        scale: [1, 1.2, 1],
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Image */}
                  <div
                    className={`lg:w-1/2 ${
                      isEven ? "order-3 lg:order-2" : "order-3 lg:order-1"
                    } pl-12 lg:pl-0`}
                  >
                    <motion.div
                      className="relative h-48 w-full rounded-2xl bg-cover bg-center shadow-md overflow-hidden group"
                      style={{ backgroundImage: `url("${step.image}")` }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
