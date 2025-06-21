import React from 'react';

const Quotes = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-8">
      <div className="absolute -left-2 top-0 text-3xl text-accent-red opacity-90">"</div>
      <div className="absolute -right-2 bottom-0 text-3xl text-accent-red opacity-90">"</div>
      <p className="text-center text-xl md:text-2xl italic font-light px-4 md:px-8 text-gray-600">{children}</p>
    </div>
  );
};

export default Quotes;
