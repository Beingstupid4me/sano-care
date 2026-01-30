// Service pricing configuration
export const SERVICE_PRICING: Record<string, { label: string; price: number; description: string }> = {
  "home-visit": {
    label: "Doctor Home Visit",
    price: 499,
    description: "General physician visit at your doorstep",
  },
  "teleconsult": {
    label: "Teleconsultation",
    price: 199,
    description: "Video consultation with a doctor",
  },
  "nursing": {
    label: "Nursing & Paramedic",
    price: 349,
    description: "Nursing care, injections, wound dressing",
  },
  "lab": {
    label: "Lab Sample Collection",
    price: 99,
    description: "Home sample collection (test charges extra)",
  },
};

export function getServicePrice(serviceCategory: string): number {
  return SERVICE_PRICING[serviceCategory]?.price || 0;
}

export function getServiceLabel(serviceCategory: string): string {
  return SERVICE_PRICING[serviceCategory]?.label || serviceCategory;
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
