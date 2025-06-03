import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const formStore = create(
  persist(
    (set) => ({
      // State for Signup data
      token: null,
      phone: null,

      // State for PersonalInfo form data
      personalInfo: {
        age: '',
        gender: '',
        aadhaar: '',
        state: '',
        district: '',
        city: '',
        address: '',
      },

      // State for ProfessionalInfo form data
      professionalInfo: {
        expertise: '',
        experience: '',
        occupation: '',
        institute: '',
        designation: '',
        duration: '',
        portfolio: '',
        social: '',
      },

      // Actions to update state
      setSignupData: (data) => set({ token: data.token, phone: data.phone }),
      setPersonalInfo: (data) => set({ personalInfo: data }),
      setProfessionalInfo: (data) => set({ professionalInfo: data }),

      // Reset state after successful submission)
      reset: () =>
        set({
          token: null,
          phone: null,
          personalInfo: {
            age: '',
            gender: '',
            aadhaar: null,
            state: '',
            district: '',
            city: '',
            address: '',
          },
          professionalInfo: {
            expertise: '',
            experience: '',
            occupation: '',
            institute: '',
            designation: '',
            duration: '',
            portfolio: null,
            social: '',
          },
        }),
    }),
    {
      name: 'form-storage', // Key for localStorage
      partialize: (state) => ({ token: state.token }), 
    }
  )
);

export default formStore;