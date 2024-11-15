import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend } from 'chart.js';

// Record the scales and elements needed for the line graph
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, LineController, Title, Tooltip, Legend);

export default function PopulationChart({ data }) {
  const chartData = {
    labels: data.map(entry => entry.year),
    datasets: [
      {
        label: 'Population',
        data: data.map(entry => entry.population),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Population',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
