import React from 'react';
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

// Define the props interface
interface TransactionandRevenueProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// TransactionandRevenue component
const TransactionandRevenue: React.FC<TransactionandRevenueProps> = ({
  horizontal = false,
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  labels = months,
}) => {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    indexAxis: horizontal ? 'y' : 'x',
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data: ChartData<'bar', number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default TransactionandRevenue;
