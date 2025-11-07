'use client';

import dynamic from 'next/dynamic';

const BaseChart = dynamic(() => import('./BaseChart'), {
  ssr: false,
});

interface ChartWrapperProps {
  className?: string;
}

const ChartWrapper: React.FC<ChartWrapperProps> = ({ className }) => {
  return <BaseChart className={className} />;
};

export default ChartWrapper;
