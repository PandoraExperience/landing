import React from 'react';
import Thankyou from '@/app/thankyou/Thankyou';
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
