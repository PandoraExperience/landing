import React from 'react';
import WhatsAppWidget from '@/app/components/ui/WA-Widget';
import Footer from '../components/layout/Footer';
import Verify from './Verify';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">

      <Verify />
      <Footer />

      {/* Sticky WhatsApp Widget */}
      <WhatsAppWidget />
    </main>
  );
}
