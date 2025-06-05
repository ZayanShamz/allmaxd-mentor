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

      // logged-in user token
      userToken: null,
      mentorData: null,

      // Actions to update state
      setSignupData: (data) => set({ token: data.token, phone: data.phone }),
      setPersonalInfo: (data) => set({ personalInfo: data }),
      setProfessionalInfo: (data) => set({ professionalInfo: data }),
      setMentorData: (data) => set({ mentorData: data }),
      setUserToken: (token) => set({ userToken: token }),

      // Reset state after successful submission
      reset: () =>
        set({
          token: null,
          phone: null,
          personalInfo: {
            age: '',
            gender: '',
            aadhaar: '',
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
            portfolio: '',
            social: '',
          },
        }),
      // clear userToken and Data on Logout
      logout: () =>
        set({
          userToken: null,
          mentorData: null,
        }),
    }),
    {
      name: 'form-storage', // Key for localStorage
      partialize: (state) => ({
        token: state.token,
        userToken: state.userToken,
        mentorData: state.mentorData
      }),
    }
  )
);

export default formStore;