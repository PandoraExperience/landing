'use client';

import React from 'react';
import Header from '@/app/components/layout/Header';
import TransformationEnvironment from '@/app/components/sections/TransformationEnvironment';
import PricingAvailability from '@/app/components/sections/PricingAvailability';
import Testimonials from '@/app/components/sections/Testimonials';

export default function TestPage() {
  return (
    <main className="min-h-screen bg-[#1D1616]">
      <Header />
      <div className="pt-20 flex flex-col">
        <TransformationEnvironment />
        <PricingAvailability />
        <Testimonials />
      </div>
    </main>
  );
} 