import React from 'react';

import { ToTop } from '@/components/molecules/ToTop';
import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';

const BaseTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    // 4rem: header height
    // 8rem: footer height desktop
    // 5rem: footer height mobile
    <>
      <Header />
      <main className="min-h-[calc(100dvh-5rem-4rem)] lg:min-h-[calc(100dvh-8rem-4rem)] pb-[2rem] lg:pb-[4rem] overflow-x-hidden">
        {children}
        <ToTop />
      </main>
      <Footer />
    </>
  );
};

export default BaseTemplate;
