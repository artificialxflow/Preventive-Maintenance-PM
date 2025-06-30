'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const data = {
  labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
  datasets: [
    {
      label: 'تعمیرات انجام شده',
      data: [12, 19, 15, 25, 22, 18],
      borderColor: 'rgb(102, 126, 234)',
      backgroundColor: 'rgba(102, 126, 234, 0.10)',
      tension: 0.4,
      fill: true,
      pointRadius: 7,
      pointHoverRadius: 9,
      pointBackgroundColor: 'rgb(102, 126, 234)',
      borderWidth: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function(context: any) {
          return ` تعداد تعمیرات: ${context.parsed.y}`;
        }
      },
      bodyFont: { family: 'Vazirmatn, sans-serif', size: 16 },
      titleFont: { family: 'Vazirmatn, sans-serif', size: 16 },
    },
    datalabels: {
      display: true,
      color: '#333',
      font: {
        family: 'Vazirmatn, sans-serif',
        size: 14,
        weight: 'bold',
      },
      align: 'top',
      anchor: 'end',
      formatter: (value: number) => value,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.07)'
      },
      ticks: {
        font: {
          family: 'Vazirmatn, sans-serif',
          size: 14,
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: 'Vazirmatn, sans-serif',
          size: 14,
        }
      }
    }
  }
};

export default function MonthlyRepairsChart() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <Line data={data} options={options} />
    </div>
  );
} 