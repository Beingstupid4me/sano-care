"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Stethoscope, ArrowRight, Lock, Shield } from "lucide-react";
import { Button, Input, Select } from "@/components/ui";
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

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { name, phone, specialty, setDetails } = useBookingStore();
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", { name, phone, specialty });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative w-full sm:max-w-md bg-white sm:rounded-2xl shadow-2xl overflow-hidden"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Handle bar for mobile */}
            <div className="sm:hidden flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-slate-300" />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-0">
              <div>
                <h3 className="text-2xl font-bold text-text-main">
                  Book Consultation
                </h3>
                <p className="text-sm text-text-secondary mt-1">
                  First consultation is free*
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mr-2 -mt-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Verified badge */}
            <div className="absolute top-6 right-16 text-green-500 bg-green-50 p-1 rounded-full sm:block hidden">
              <Shield className="w-5 h-5" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
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

              <div className="text-center flex items-center justify-center gap-1 text-xs text-gray-400 pb-2">
                <Lock className="w-3 h-3" />
                Your personal information is 100% safe
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
