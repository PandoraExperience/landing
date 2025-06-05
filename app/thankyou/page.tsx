import React from 'react';
import Hero from '@/app/components/sections/Hero';
import Thankyou from '@/app/components/sections/Thankyou';
import WhatsAppWidget from '@/app/components/ui/WA-Widget';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">

      <Thankyou />
      <Footer />

      {/* Sticky WhatsApp Widget */}
      <WhatsAppWidget />
    </main>
  );
}
