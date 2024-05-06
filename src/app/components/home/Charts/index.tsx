"use client";
import { useViewport } from "@/app/utils/other";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  RadialLinearScale,
  ArcElement,
} from "chart.js";
import { Bar, Line, PolarArea } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Annual Chart",
      color: "#bfc0c0",
    },
  },
  scales: {
    x: {
      grid: {
        color: "#bfc0c0",
      },
      ticks: {
        color: "#e7d7c1",
      },
      title: {
        color: "#e7d7c1",
      },
    },
    y: {
      grid: {
        color: "#bfc0c0",
      },
      ticks: {
        color: "#e7d7c1",
      },
      title: {
        color: "#e7d7c1",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const num1: number[] = [200, 320, 400, 50, 600, 45, 22];
const num2: number[] = [700, 120, 200, 50, 700, 45, 117];

const data = {
  labels,
  datasets: [
    {
      label: "clients",
      data: labels.map(
        (y, index) => num1.slice().sort((a, b) => a - b)[Number(index)]
      ),
      borderColor: "#575cdf",
      backgroundColor: "#575cdf",
    },
    {
      label: "requests",
      data: labels.map(
        (y, index) => num2.slice().sort((a, b) => a - b)[Number(index)]
      ),
      borderColor: "hsl(319.57deg 100% 63.92%)",
      backgroundColor: "hsl(319.57deg 100% 63.92%)",
    },
  ],
};
const coptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#bfc0c0",
      },
      ticks: {
        color: "#e7d7c1",
      },
    },
    y: {
      grid: {
        color: "#bfc0c0",
      },
      ticks: {
        color: "#e7d7c1",
      },
    },
  },
};
const cdata = {
  datasets: [
    {
      label: "clients",
      data: [320, 370, 400, 500, 600, 405, 220],
      borderColor: [
        "#d7425e",
        "#48a8e2",
        "hsl(234.12deg 100% 80%)",
        "#f2a35f",
        "#c9a690",
        "#bfc0c0",
        "green",
      ],
      backgroundColor: [
        "#d7425e",
        "#48a8e2",
        "hsl(234.12deg 100% 80%)",
        "#f2a35f",
        "#c9a690",
        "#bfc0c0",
        "green",
      ],
    },
  ],
};

export default function Charts() {
  // check width
  const { width } = useViewport();
  // small screens
  const isSmallScreen = Number(width) < 680;
  // too small
  const istooSmall = Number(width) < 480;

  return (
    <div className="astronaut mt-3">
      <div className="flex flex-col justify-between gap-7 min-h-semiFull mx-11 my-2">
        {/* title */}
        <h2 className="font-extrabold text-2xl capitalize">statistics</h2>
        {/* total orders & clients */}
        {/* mapping later */}
        <div className="flex flex-row  justify-between bg-f-lbackgroud py-7 px-5 rounded-2xl">
          <h5 className="font-semibold text-f-white">total orders</h5>
          <h6 className="text-f-white">1150 orders</h6>
        </div>
        <div className="flex flex-row  justify-between bg-f-lbackgroud py-7 px-5 rounded-2xl">
          <h5 className="font-semibold text-f-white">total clients</h5>
          <h6 className="text-f-white">117 clients</h6>
        </div>
        {/* reports charts*/}
        <div className="flex flex-1 flex-col justify-between bg-f-lbackgroud py-7 px-5 rounded-2xl min-h-40">
          <h5 className="font-semibold text-f-white">reports</h5>
          {isSmallScreen ? (
            istooSmall ? (
              <PolarArea options={coptions} data={cdata} />
            ) : (
              <Bar options={options} data={data} />
            )
          ) : (
            <Line options={options} data={data} />
          )}
        </div>
      </div>
    </div>
  );
}
