'use client';

import React from 'react';
import Header from '@/app/components/layout/Header';
import TransformationEnvironment from '@/app/components/sections/TransformationEnvironment';
import Benefits from '@/app/components/sections/Benefits';
import PriceCard from '@/app/components/sections/Price';
import Testimonials from '@/app/components/sections/Testimonials';
import YourGuide from '@/app/components/sections/YourGuide';
import FAQ from '@/app/components/sections/FAQ';
import FormSection from '@/app/components/sections/registration/Form';
import SaveLeadParams from '@/app/lib/SaveLeadParams';

export default function TestPage() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Header />
      <div className="pt-20 flex flex-col">
        <SaveLeadParams />
        <FormSection />
        <TransformationEnvironment />
        <Testimonials />
        <Benefits />
        <PriceCard />
        <YourGuide />
        <FAQ />
      </div>
    </main>
  );
} 