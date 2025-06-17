import React from 'react';
import WhatsAppWidget from '@/app/components/ui/WA-Widget';
import Footer from '../components/layout/Footer';
import Policy from './Policy';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">

      <Policy />
      <Footer />

      {/* Sticky WhatsApp Widget */}
      <WhatsAppWidget />
    </main>
  );
}
