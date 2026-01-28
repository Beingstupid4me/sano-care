"use client";

import { motion } from "framer-motion";
import { User, Phone, Stethoscope, ArrowRight, Shield, Lock } from "lucide-react";
import { GlassCard, Button, Input, Select } from "@/components/ui";
import { useBookingStore } from "@/store/bookingStore";

const specialtyOptions = [
  { value: "", label: "Select Specialty" },
  { value: "general", label: "General Medicine" },
  { value: "cardiology", label: "Cardiology" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "neurology", label: "Neurology" },
  { value: "orthopedics", label: "Orthopedics" },
  { value: "dermatology", label: "Dermatology" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const { name, phone, specialty, setDetails } = useBookingStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", { name, phone, specialty });
  };

  return (
    <section className="relative lg:min-h-[85vh] flex items-center overflow-hidden bg-background-light py-12 lg:py-0">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop")`,
            filter: "grayscale(100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-light via-background-light/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
      </div>

      <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-12 relative z-10 pt-10 pb-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center gap-5 lg:gap-6 lg:pr-10 order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm"
            >
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Accepting New Patients
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-text-main"
            >
              Sano Care <br />
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-500 to-indigo-500 font-light inline-block pb-2 pr-2.5">
                Wellness Redefined
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-text-secondary/80 max-w-xl font-medium"
            >
              Experience a seamless journey from consultation to recovery. We
              simplify healthcare with expert doctors and modern clinics near you.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 lg:gap-8 pt-4"
            >
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-text-main">400+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  Doctors
                </span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-text-main">50+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  Specialties
                </span>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-text-main">30+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                  Cities
                </span>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 mt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                  +2k
                </div>
              </div>
              <div className="text-sm font-semibold text-text-main">
                <div className="flex text-yellow-500 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                Trusted by families
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Booking Form */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div id="hero-booking-form">
              <GlassCard variant="solid" className="w-full max-w-md relative">
              {/* Verified badge */}
              <div className="absolute top-4 right-4 text-green-500 bg-green-50 p-1 rounded-full">
                <Shield className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-text-main mb-1">
                Book Consultation
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                First consultation is free*
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Patient Name"
                  icon={User}
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => setDetails({ name: e.target.value })}
                />

                <Input
                  label="Phone Number"
                  icon={Phone}
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setDetails({ phone: e.target.value })}
                />

                <Select
                  label="Select Specialty"
                  icon={Stethoscope}
                  options={specialtyOptions}
                  value={specialty}
                  onChange={(e) => setDetails({ specialty: e.target.value })}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  glow
                  className="w-full mt-2"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <div className="text-center mt-4 flex items-center justify-center gap-1 text-xs text-gray-400">
                  <Lock className="w-3 h-3" />
                  Your personal information is 100% safe
                </div>
              </form>
            </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
