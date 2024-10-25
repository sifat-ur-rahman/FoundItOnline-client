// components/UserChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserChart: React.FC = () => {
  const data: ChartData<"line"> = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Lost item",
        data: [1, 5, 8, 2, 3, 6, 5, 7, 2, 4, 9, 4],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Found item",
        data: [8, 10, 3, 7, 2, 6, 4, 6, 3, 3, 8, 4],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Claim item",
        data: [3, 2, 4, 7, 9, 4, 3, 5, 7, 5, 2, 4],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-2xl p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Monthly Lost, Found, and Claim Count
        </h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserChart;
