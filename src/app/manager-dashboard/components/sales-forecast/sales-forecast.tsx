"use client";

import { Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "./sales-forecast.scss";
import { useEffect, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataLabels
);

const SalesForecast = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Now", "20 days", "40 days", "60 days"],
    datasets: [
      {
        label: "Sales Forecast",
        data: [200, 250, 100, 50],
        fill: true,
        borderColor: "#000000",
        pointBackgroundColor: "#F48035",
        pointBorderColor: "#F48035",
        pointHoverBackgroundColor: "#F48035",
        pointHoverBorderColor: "#F48035",
        tension: 0.4,
      },
    ],
  };

  const options:any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        align: "top",
        color: "#F15522",
        font: {
          weight: "bold",
        },
        formatter: (value: any) => {
          return `${value} processed`;
        },
      },
    },
    scales: {
      x: {},
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  useEffect(() => {
    const chart: any = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, "#FFFFFF00");
    gradient.addColorStop(0.7, "#000000");
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;

    const drawDatasetWithShadow = (originalDraw: any) => {
      return function (...args: any) {
        ctx.save();
        ctx.shadowColor = gradient;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        ctx.strokeStyle = gradient;
        // @ts-ignore
        originalDraw.apply(this, args);
        ctx.restore();
      };
    };

    const dataset = chart.config.data.datasets[0];
    dataset.draw = drawDatasetWithShadow(dataset.draw);

    chart.update();
  }, []);

  return (
    <div className="sales-forecast">
      <p className="heading">Sales forecast</p>
      <Line data={data} options={options} ref={chartRef} />
    </div>
  );
};

export default SalesForecast;
