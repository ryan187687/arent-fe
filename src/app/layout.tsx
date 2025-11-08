import '../styles/globals.css';

import React from 'react';

import { DrawerMenu } from '@/components/atoms/DrawerMenu';
import { BaseTemplate } from '@/components/templates/BaseTemplate';

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
