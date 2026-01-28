"use client";

import Link from "next/link";
import { Hospital, MapPin, Phone, Mail, Twitter, Globe, Send } from "lucide-react";

const footerLinks = {
  departments: [
    { label: "Primary Care", href: "#" },
    { label: "Cardiology Center", href: "#" },
    { label: "Pediatrics", href: "#" },
    { label: "Neurology & Stroke", href: "#" },
    { label: "Orthopedics", href: "#" },
  ],
  resources: [
    { label: "Patient Portal Login", href: "#" },
    { label: "Book Appointment", href: "#" },
    { label: "Insurance Accepted", href: "#" },
    { label: "Telehealth Services", href: "#" },
    { label: "Visitor Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-light border-t border-slate-200 pt-20 pb-12 relative z-10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <Hospital className="w-5 h-5" />
              <span className="text-xl font-serif font-bold text-text-main">
                Sano<span className="italic font-normal text-primary">Care</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-text-secondary">
              Providing world-class healthcare with a personal touch. We believe
              in a future where health is accessible, personalized, and
              proactive.
            </p>
            <div className="flex gap-4">
              {[Twitter, Globe, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-text-secondary hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-text-main">
              Departments
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              {footerLinks.departments.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-text-main">
              Patient Resources
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-text-secondary">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-text-main">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>
                  123 Healthcare Ave, <br />
                  Medical District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>care@sanocare.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-8 text-sm text-text-secondary md:flex-row">
          <p>© 2024 Sano Care. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
