"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, MapPin, Video, Loader2, ArrowRight, Check, Clock, UserCheck, Calendar } from "lucide-react";
import { Button, Input, Select } from "@/components/ui";
import { useBookingStore } from "@/store/bookingStore";

const consultationOptions = [
  { value: "", label: "Select Consultation Type" },
  { value: "video", label: "Video Consultation" },
  { value: "clinic", label: "In-Clinic Visit" },
  { value: "home", label: "Home Visit" },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { name, phone, location, consultationType, isLocating, setDetails, setLocating } = useBookingStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
          );
          const data = await response.json();
          const city = data.address?.city || data.address?.town || data.address?.village || data.address?.state || "Location detected";
          setDetails({ location: city });
        } catch {
          setDetails({ location: "Location detected" });
        }
        setLocating(false);
      },
      () => {
        setLocating(false);
        alert("Unable to retrieve your location");
      }
    );
  };

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
    console.log("Booking submitted:", { name, phone, location, consultationType });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                Book Your Consultation Now
              </h3>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Info */}
              <div className="p-6 lg:p-8 bg-slate-50 border-r border-slate-100">
                <h4 className="text-lg font-bold text-text-main mb-2">
                  Simplifying Your Healthcare Journey
                </h4>
                <p className="text-sm text-text-secondary mb-6">
                  Consult with our expert doctors for all your health needs
                </p>

                <div className="space-y-4">
                  <h5 className="text-sm font-bold text-text-main">Next Steps</h5>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm text-text-secondary">
                        Our care coordinator will contact you within 30 minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm text-text-secondary">
                        We&apos;ll understand your symptoms and health concerns
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm text-text-secondary">
                        Your consultation will be scheduled at the earliest
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3M+</div>
                    <div className="text-xs text-text-secondary">Happy Patients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-xs text-text-secondary">Clinics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-xs text-text-secondary">Cities</div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="p-6 lg:p-8">
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

                  {/* Location with detect button */}
                  <div className="relative">
                    <Input
                      label="Location"
                      icon={MapPin}
                      placeholder="Enter your city"
                      value={location}
                      onChange={(e) => setDetails({ location: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={handleGetLocation}
                      disabled={isLocating}
                      className="absolute right-3 top-[34px] text-xs text-primary font-medium hover:text-primary-dark transition-colors disabled:opacity-50 flex items-center gap-1"
                    >
                      {isLocating ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        "Detect"
                      )}
                    </button>
                  </div>

                  <Select
                    label="Consultation Type"
                    icon={Video}
                    options={consultationOptions}
                    value={consultationType}
                    onChange={(e) => setDetails({ consultationType: e.target.value })}
                  />

                  {/* Promo badge */}
                  <div className="flex justify-center">
                    <span className="inline-flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      <Check className="w-3 h-3" />
                      First Consultation FREE
                    </span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    glow
                    className="w-full"
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    Average response time: 30 minutes
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

