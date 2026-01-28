"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookingModal } from "./BookingModal";

export function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the booking form element (hero section form)
      const heroSection = document.getElementById("hero-booking-form");
      
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        // Show the bar when the form is scrolled out of view (bottom of form is above viewport)
        setIsVisible(rect.bottom < 0);
      } else {
        // Fallback: show after scrolling 500px
        setIsVisible(window.scrollY > 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-6 py-4 lg:hidden"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between max-w-[1400px] mx-auto gap-4">
              {/* Price Section */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-text-secondary uppercase">
                  Consultation
                </span>
                <span className="text-lg font-bold text-primary">Free*</span>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 max-w-[200px] bg-primary text-white rounded-lg py-3 px-6 font-bold text-sm shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                <span>Book Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
