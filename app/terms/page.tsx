import React from 'react';
import WhatsAppWidget from '@/app/components/ui/WA-Widget';
import Footer from '../components/layout/Footer';
import TyC from '@/app/terms/TyC';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">

      <TyC />
      <Footer />

      {/* Sticky WhatsApp Widget */}
      <WhatsAppWidget />
    </main>
  );
}
