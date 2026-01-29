"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hospital } from "lucide-react";
import { Button } from "@/components/ui";
import { BookingModal } from "@/components/BookingModal";
import { useBookingStore } from "@/store/bookingStore";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#specialists", label: "Specialists" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isModalOpen, openModal, closeModal } = useBookingStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100"
            : "bg-surface-light/95 border-b border-slate-100"
        )}
      >
        <div className="mx-auto flex h-20 lg:h-24 max-w-[1400px] items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-blue-400 text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <Hospital className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-serif font-bold tracking-tight text-text-main">
              Sano<span className="text-primary font-normal italic">care</span>
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-end items-center gap-8 lg:gap-10">
            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-main hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="primary" 
                size="md" 
                className="rounded-full"
                onClick={openModal}
              >
                Book Now
              </Button>
              <Button variant="outline" size="md" className="rounded-full">
                Patient Portal
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center text-text-main p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-text-main hover:text-primary py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button 
                  variant="primary" 
                  size="md" 
                  className="mt-4 rounded-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                >
                  Book Now
                </Button>
                <Button variant="outline" size="md" className="rounded-full">
                  Patient Portal
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
