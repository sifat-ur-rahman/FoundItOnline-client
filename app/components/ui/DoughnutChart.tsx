// components/DoughnutChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data: ChartData<"doughnut"> = {
    labels: ["Lost Count", "Found Count", "Claim Count"],
    datasets: [
      {
        label: "Counts",
        data: [80, 70, 40],
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            label += context.raw;
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Counts Overview</h2>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
