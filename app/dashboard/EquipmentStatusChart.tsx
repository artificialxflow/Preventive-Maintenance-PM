'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['فعال', 'در تعمیر', 'خراب', 'غیرفعال'],
  datasets: [
    {
      data: [220, 15, 5, 7],
      backgroundColor: [
        '#1cc88a', // فعال
        '#f6c23e', // در تعمیر
        '#e74a3b', // خراب
        '#6c757d'  // غیرفعال
      ],
      borderWidth: 2,
      borderColor: '#fff',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
        font: { family: 'Vazirmatn, sans-serif' }
      }
    }
  }
};

export default function EquipmentStatusChart() {
  return <Doughnut data={data} options={options} />;
} 