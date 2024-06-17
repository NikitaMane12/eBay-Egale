// import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Interface for props
interface HorizontalGraphProps {
  horizontal?: boolean;
  data_1: number[];
  title_1: string;
  bgColor_1: string;
  labels?: string[];
}

// Constant months array
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// HorizontalGraph function component
export function HorizontalGraph({
  horizontal = false,
  data_1,
  title_1,
  bgColor_1,
  labels = months
}: HorizontalGraphProps) {
  // Chart options
  const options: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: horizontal ? 'y' : 'x',
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  // Chart data
  const data: ChartData<'bar', number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
      },
    ],
  };

  // Render the Bar chart using react-chartjs-2
  return <Bar options={options} data={data} />;
}
