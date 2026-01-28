import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type BookingState = {
  // Step 1 Details (The Hook)
  name: string;
  phone: string;
  specialty: string;
  
  // Step 2 Details (Post-Commitment)
  symptom: string;
  history: string;
  
  // Form step tracking
  step: number;
  
  // Actions
  setDetails: (details: Partial<BookingState>) => void;
  setStep: (step: number) => void;
  reset: () => void;
};

const initialState = {
  name: '',
  phone: '',
  specialty: '',
  symptom: '',
  history: '',
  step: 1,
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      ...initialState,
      setDetails: (details) => set((state) => ({ ...state, ...details })),
      setStep: (step) => set({ step }),
      reset: () => set(initialState),
    }),
    { 
      name: 'sano-booking-storage',
      // Only persist essential fields
      partialize: (state) => ({
        name: state.name,
        phone: state.phone,
        specialty: state.specialty,
        step: state.step,
      }),
    }
  )
);
