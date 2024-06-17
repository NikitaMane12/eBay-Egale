import React from 'react';
import { Doughnut } from 'react-chartjs-2';
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
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface DoughnutChartProps {
  labels: string[];
  data_1: number[];
  backgroundColor_1: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const CountryRatio: React.FC<DoughnutChartProps> = ({
  labels,
  data_1,
  backgroundColor_1,
  cutout,
  legends = true,
  offset,
}) => {
  const doughnutData: ChartData<'doughnut', number[], string> = {
    labels,
    datasets: [
      {
        data: data_1,
        backgroundColor: backgroundColor_1,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: 'bottom',
        labels: {
          padding: 20,
        },
      },
    },
    cutout,
  };

  return (
    <div>
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </div>
  );
};

export default CountryRatio;
