import React from 'react';
import { Pie } from 'react-chartjs-2';
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
    ArcElement
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

// Define the interface for props
interface PieChartProps {
    labels: string[];
    data_1: number[];
    backgroundColor_1: string[];
    offset?: number[];
}

// Functional component PieChart1 with React.FC type and props destructuring
const PieChart1: React.FC<PieChartProps> = ({
    labels,
    data_1,
    backgroundColor_1,
    offset,
}) => {
    // Define chart data
    const piechartData: ChartData<'pie', number[], string> = {
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

    // Define chart options
    const piechartOptions: ChartOptions<'pie'> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
    };

    // Render Pie chart using react-chartjs-2
    return (
        <div>
            <Pie data={piechartData} options={piechartOptions} />
        </div>
    );
};

export default PieChart1;
