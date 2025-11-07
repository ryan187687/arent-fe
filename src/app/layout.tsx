import { BaseTemplate } from '@/components/templates/BaseTemplate';
import React from 'react';
import '../styles/globals.css';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="ja">
    <body>
      <BaseTemplate>{children}</BaseTemplate>
    </body>
  </html>
);

export default RootLayout;
