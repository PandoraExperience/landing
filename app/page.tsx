import React from 'react';
import Hero from '@/app/components/sections/Hero';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import RegistrationForm from '@/app/components/sections/RegistrationForm';
import TargetAudience from '@/app/components/sections/TargetAudience';
import ExperienceHighlights from '@/app/components/sections/ExperienceHighlights';
import TransformationEnvironment from '@/app/components/sections/TransformationEnvironment';
import PricingAvailability from '@/app/components/sections/PricingAvailability';
import Testimonials from '@/app/components/sections/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TargetAudience />
      <ExperienceHighlights />
      <TransformationEnvironment />
      <PricingAvailability />
      <Testimonials />
      
      {/* More sections will be implemented later */}
      
      {/* Registration form */}
      <RegistrationForm />
      
      <Footer />
    </main>
  );
}
