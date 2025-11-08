import React from 'react';

import { cn } from '@/utils/cn';

interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const BaseIcon: React.FC<BaseIconProps> = ({ component: Component, className = '', ...rest }) => {
  return (
    <span className={cn('inline-flex items-center justify-center w-full h-full', className)}>
      <Component {...rest} />
    </span>
  );
};

export default BaseIcon;
