import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type BookingState = {
  // Form Details
  name: string;
  phone: string;
  location: string;
  consultationType: string;
  
  // UI State
  isModalOpen: boolean;
  isLocating: boolean;
  
  // Actions
  setDetails: (details: Partial<BookingState>) => void;
  openModal: () => void;
  closeModal: () => void;
  setLocating: (isLocating: boolean) => void;
  reset: () => void;
};

const initialState = {
  name: '',
  phone: '',
  location: '',
  consultationType: '',
  isModalOpen: false,
  isLocating: false,
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      ...initialState,
      setDetails: (details) => set((state) => ({ ...state, ...details })),
      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),
      setLocating: (isLocating) => set({ isLocating }),
      reset: () => set(initialState),
    }),
    { 
      name: 'sano-booking-storage',
      partialize: (state) => ({
        name: state.name,
        phone: state.phone,
        location: state.location,
        consultationType: state.consultationType,
      }),
    }
  )
);

