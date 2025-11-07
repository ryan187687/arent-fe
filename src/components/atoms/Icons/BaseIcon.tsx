import { cn } from '@/utils/cn';
import React from 'react';

interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const BaseIcon: React.FC<BaseIconProps> = ({ component: Component, className = '', ...rest }) => {
  return (
    <span className={cn('inline-flex items-center justify-center', className)}>
      <Component {...rest} />
    </span>
  );
};

export default BaseIcon;
