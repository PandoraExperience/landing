import React from 'react';
import Hero from '@/app/components/sections/Hero';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import RegistrationForm from '@/app/components/sections/registration';
import TargetAudience from '@/app/components/sections/TargetAudience';
import ExperienceHighlights from '@/app/components/sections/ExperienceHighlights';
import TransformationEnvironment from '@/app/components/sections/TransformationEnvironment';
import Benefits from '@/app/components/sections/Benefits';
import PriceCard from '@/app/components/sections/Price';
import Testimonials from '@/app/components/sections/Testimonials';
import FAQ from '@/app/components/sections/FAQ';
import YourGuide from '@/app/components/sections/YourGuide';
import WhatsAppWidget from '@/app/components/ui/WhatsAppWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TargetAudience />
      <ExperienceHighlights />
      <TransformationEnvironment />
      <Testimonials />
      <Benefits />
      <PriceCard />
      <RegistrationForm />
      <YourGuide />
      <FAQ />
      <Footer />

      {/* Sticky WhatsApp Widget */}
      <WhatsAppWidget />
    </main>
  );
}
