'use client';

import dynamic from 'next/dynamic';

const BaseChart = dynamic(() => import('./BaseChart'), {
  ssr: false,
});

const ChartWrapper: React.FC = () => {
  return <BaseChart />;
};

export default ChartWrapper;
