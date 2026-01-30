# Sanocare Website - Remaining Work & Phase 2 Roadmap

> Last updated: January 30, 2026

## ✅ Phase 1 Complete

### Core Pages
- [x] Homepage with all sections
- [x] Patient Portal (Coming Soon page)
- [x] Custom 404 page
- [x] Generic "Under Construction" pages for incomplete routes

### Core Features
- [x] Booking form with Supabase integration
- [x] High-accuracy GPS detection
- [x] Phone number formatting (+91)
- [x] Booking confirmation with pricing
- [x] "Booking for someone else" checkbox
- [x] Local storage persistence (30-min expiry)
- [x] Mobile sticky bar (bottom)
- [x] Sticky header navigation (all screens)
- [x] Responsive design (mobile, tablet, desktop)

### SEO & Metadata
- [x] Custom logo (logo.svg) as favicon
- [x] Comprehensive Open Graph metadata
- [x] Twitter card metadata
- [x] Structured metadata with keywords
- [x] PWA manifest.json
- [x] Geo-targeting for Delhi NCR

### Error Handling
- [x] Network error detection (offline check)
- [x] Request timeout handling (15s)
- [x] Helpful error messages with phone fallback
- [x] Loading states on all buttons

### Trust & Compliance
- [x] Trust badges (Verified Doctors, HIPAA, 24/7, etc.)
- [x] Footer legal links (Privacy, Terms, Sitemap)
- [x] Social media links
- [x] Contact information

### Architecture
- [x] Services layer (business logic)
- [x] Adapters layer (Supabase, Browser APIs)
- [x] Clean separation of concerns
- [x] Service factory for easy backend switching

---

## 🚧 Coming Soon Pages (Under Construction)

| Page | Route | Priority | Notes |
|------|-------|----------|-------|
| About Us | `/coming-soon/about` | High | Company story, mission, team |
| Privacy Policy | `/coming-soon/privacy` | High | Legal requirement |
| Terms of Service | `/coming-soon/terms` | High | Legal requirement |
| Sitemap | `/coming-soon/sitemap` | Low | SEO helper |
| Health Blog | `/coming-soon/blog` | Medium | Content marketing |
| Careers | `/coming-soon/careers` | Medium | Hiring page |
| Live Chat | `/coming-soon/chat` | High | Customer support |

---

## 📋 Phase 2 Features

### Patient Portal (High Priority)
- [ ] User authentication (OTP-based login)
- [ ] View booking history
- [ ] Track current booking status
- [ ] Access digital prescriptions
- [ ] Download medical records
- [ ] Chat with care team

### Admin Dashboard
- [ ] View all bookings
- [ ] Assign paramedics
- [ ] Update booking status
- [ ] View analytics

### Enhanced Booking
- [ ] Time slot selection
- [ ] Multiple patients in one booking
- [ ] Recurring bookings
- [ ] Payment integration (Razorpay/UPI)
- [ ] SMS/WhatsApp notifications

### Content Pages
- [ ] About Us page with team profiles
- [ ] Individual service detail pages
- [ ] Doctor/specialist profiles
- [ ] Blog with articles
- [ ] FAQs section

### Technical Improvements
- [ ] Implement email notifications
- [ ] Add SMS notifications (Twilio/MSG91)
- [ ] WhatsApp Business integration
- [ ] Analytics tracking (GA4/Mixpanel)
- [ ] SEO optimization
- [ ] PWA support
- [ ] Performance optimization

---

## 🔧 Technical Debt

### Code Quality
- [ ] Add unit tests for services
- [ ] Add E2E tests (Playwright)
- [ ] Add error boundary components
- [ ] Improve TypeScript strict mode compliance

### Infrastructure
- [ ] Set up staging environment
- [ ] Configure CI/CD pipeline
- [ ] Add monitoring (Sentry)
- [ ] Set up proper logging

---

## 📁 Project Structure

```
src/
├── adapters/              # Backend adapters (Supabase, Browser APIs)
│   ├── browser/           # Browser API wrappers
│   └── supabase/          # Supabase repository implementations
├── app/                   # Next.js app router pages
│   ├── coming-soon/       # Generic under construction pages
│   ├── portal/            # Patient portal
│   └── not-found.tsx      # Custom 404
├── components/            # React components
│   └── ui/                # Reusable UI primitives
├── constants/             # App constants (pricing, etc.)
├── hooks/                 # React hooks (legacy, to be migrated)
├── lib/                   # Utilities and service factory
├── services/              # Business logic layer
│   ├── booking/           # Booking service & types
│   └── geolocation/       # Geolocation service & types
└── store/                 # Zustand state management
```

---

## 🔄 Migration Notes

### Switching from Supabase to Another Backend

1. Create a new repository implementation in `src/adapters/`
2. Implement the `BookingRepository` interface
3. Update `src/lib/serviceFactory.ts` to use the new adapter
4. No changes needed in components or hooks

Example for Firebase:
```typescript
// src/adapters/firebase/FirebaseBookingRepository.ts
import { BookingRepository } from '@/services/booking';

export class FirebaseBookingRepository implements BookingRepository {
  // Implement all methods...
}
```

---

## 📞 Contact

For questions about this project:
- Email: contact@sanocare.in
- Phone: +91-9571608318
