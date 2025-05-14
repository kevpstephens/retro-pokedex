import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function StatsChart({ stats }) {
  if (!stats) return null;
  const labelMap = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Special-Attack",
    "special-defense": "Special-Defense",
    speed: "Speed",
  };
  const labels = stats.map((stat) => labelMap[stat.stat.name]);
  const values = stats.map((stat) => stat.base_stat);

  const data = {
    labels,
    datasets: [
      {
        label: "Base Stats",
        data: values,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        borderColor: "black",
        borderWidth: 3,
        pointBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: "#444",
        },
        grid: {
          color: "#888",
        },
        pointLabels: {
          color: "#fff",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        ticks: {
          backdropColor: "transparent",
          color: "#ccc",
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
}

export default StatsChart;
