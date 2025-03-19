// Testimonial type
export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image?: string;
}

// FAQ Item type
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Registration Form type
export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
} 