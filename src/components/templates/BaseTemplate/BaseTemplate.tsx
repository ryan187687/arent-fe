import { ToTop } from '@/components/molecules/ToTop';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import React from 'react';

const BaseTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    // 4rem: header height
    // 8rem: footer height
    <>
      <Header />
      <main className="min-h-[calc(100dvh-8rem-4rem)] pb-[4rem] overflow-x-hidden">
        {children}
        <ToTop />
      </main>
      <Footer />
    </>
  );
};

export default BaseTemplate;
