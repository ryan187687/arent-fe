'use client';

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { cn } from '@/utils/cn';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

interface BaseChartProps {
  className?: string;
}

const BaseChart: React.FC<BaseChartProps> = ({ className }) => {
  const data = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    datasets: [
      {
        data: [90, 80, 82, 77, 70, 75, 68, 60, 55, 52, 50, 45],
        borderColor: '#FFCC21', // vàng
        backgroundColor: '#FFCC21',
        fill: false,
        tension: 0,
      },
      {
        data: [88, 82, 78, 79, 73, 70, 65, 62, 58, 50, 47, 43],
        borderColor: '#8FE9D0', // xanh cyan
        backgroundColor: '#8FE9D0',
        fill: false,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Hide legend
      tooltip: { mode: 'index' as const, intersect: false },
    },
    scales: {
      x: {
        grid: { color: '#777777' },
        border: { display: false },
        ticks: {
          color: '#fff', // Text color of the x-axis
        },
      },
      y: {
        grid: { display: false },
        ticks: {
          display: false, // Hide y-axis label
        },
      },
    },
  };

  return (
    <div className={cn('size-full bg-[#2E2E2E] p-4', className)}>
      <Line data={data} options={options} />
    </div>
  );
};

export default BaseChart;
