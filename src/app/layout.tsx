import '../styles/globals.css';

import React from 'react';

import { DrawerMenu } from '@/components/atoms/DrawerMenu';
import { BaseTemplate } from '@/components/templates/BaseTemplate';

export async function generateMetadata() {
  return {
    title: 'Health Track',
    description: 'Health Track is a site for health management.',
  };
}

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="ja">
      <body>
        <BaseTemplate>{children}</BaseTemplate>
        <DrawerMenu />
      </body>
    </html>
  );
};

export default RootLayout;
