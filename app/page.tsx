import React from 'react';
import Hero from '@/app/components/sections/Hero';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import ReserveInfo from '@/app/components/sections/ReserveInfo';
import TargetAudience from '@/app/components/sections/TargetAudience';
import ExperienceHighlights from '@/app/components/sections/Experience';
import TransformationEnvironment from '@/app/components/sections/TransformationEnvironment';
import Benefits from '@/app/components/sections/Benefits';
import PriceCard from '@/app/components/sections/Price';
import Testimonials from '@/app/components/sections/Testimonials';
import FAQ from '@/app/components/sections/FAQ';
import YourGuide from '@/app/components/sections/YourGuide';
import WhatsAppWidget from '@/app/components/ui/WA-Widget';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Header />
      <Hero />
      <TargetAudience />
      <ExperienceHighlights />
      <TransformationEnvironment />
      <Benefits />
      <PriceCard />
      <ReserveInfo />
      <Testimonials />
      <YourGuide />
      <FAQ />
      <Footer />
    </main>
  );
}
