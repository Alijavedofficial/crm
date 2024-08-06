// "use client";

// import { Line } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import { Button } from "antd";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";
// import "./sales-forecast.scss";
// import { useEffect, useRef } from "react";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   ChartDataLabels
// );

// const lineChart = () => {
//   const chartRef = useRef(null);

//   const data = {
//     labels: ["001", "002", "003", "004", "005", "006", "007"],
//     datasets: [
//       {
//         label: "Leads",
//         data: [200, 150, 200, 50, 100, 200, 111],
//         fill: true,
//         borderColor: "#000000",
//         pointBackgroundColor: "#F48035",
//         pointBorderColor: "#F48035",
//         pointHoverBackgroundColor: "#F48035",
//         pointHoverBorderColor: "#F48035",
//         tension: 0.1,
//       },
//     ],
//   };

//   const options: any = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       datalabels: {
//         display: true,
//         align: "top",
//         color: "#F15522",
//         font: {
//           weight: "bold",
//         },
//         formatter: (value: any) => {
//           return `${value} processed`;
//         },
//       },
//     },
//     scales: {
//       x: {},
//       y: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     const chart: any = chartRef.current;
//     if (!chart) return;

//     const ctx = chart.ctx;

//     // Create gradient
//     const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
//     gradient.addColorStop(0, "#FFFFFF00");
//     gradient.addColorStop(0.7, "#000000");
//     ctx.shadowBlur = 10;
//     ctx.shadowOffsetX = 0;
//     ctx.shadowOffsetY = 2;

//     const drawDatasetWithShadow = (originalDraw: any) => {
//       return function (...args: any) {
//         ctx.save();
//         ctx.shadowColor = gradient;
//         ctx.shadowBlur = 10;
//         ctx.shadowOffsetX = 0;
//         ctx.shadowOffsetY = 4;
//         ctx.strokeStyle = gradient;
//         // @ts-ignore
//         originalDraw.apply(this, args);
//         ctx.restore();
//       };
//     };

//     const dataset = chart.config.data.datasets[0];
//     dataset.draw = drawDatasetWithShadow(dataset.draw);

//     chart.update();
//   }, []);
//   const buttonConfigs = [
//     { label: "Button 1", onClick: () => console.log("Button 1 clicked") },
//     { label: "Button 2", onClick: () => console.log("Button 2 clicked") },
//     { label: "Button 3", onClick: () => console.log("Button 3 clicked") },
//   ];

//   return (
//     <div className="sales-forecast">
//       <div>
//         <div className="chartdata">
//           <div className="box">
//             <span className="new">New</span>
//             <span className="charDatatext">123</span>
//           </div>
//           <div></div>
//         </div>

//         <div className="chartButtons">
//           {buttonConfigs.map((buttonConfig, index) => (
//             <Button key={index} onClick={buttonConfig.onClick}>
//               {buttonConfig.label}
//             </Button>
//           ))}
//         </div>
//       </div>
//       <div style={{ width: "100%" }}>
//         <p className="heading">Leads</p>
//         <Line data={data} options={options} ref={chartRef} />
//       </div>
//     </div>
//   );
// };

// export default lineChart;

"use client";
import "./sales-forecast.scss";

import React from 'react';
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Button } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const BarChart = () => {
  const data = {
    labels: ["initial contact", "negotiations", "make decisions", "harmonization", "last", "closed"],
    datasets: [
      {
        data: [65, 35, 55, 84, 15, 60],
        backgroundColor: [
          'rgba(173, 216, 230, 0.7)',  // Light blue
          'rgba(255, 182, 193, 0.7)',  // Light pink
          'rgba(255, 218, 185, 0.7)',  // Peach
          'rgba(255, 192, 203, 0.7)',  // Pink
          'rgba(255, 255, 224, 0.7)',  // Light yellow
          'rgba(152, 251, 152, 0.7)',  // Pale green
        ],
        borderColor: [
          'rgba(173, 216, 230, 1)',
          'rgba(255, 182, 193, 1)',
          'rgba(255, 218, 185, 1)',
          'rgba(255, 192, 203, 1)',
          'rgba(255, 255, 224, 1)',
          'rgba(152, 251, 152, 1)',
        ],
        borderWidth: 1,
        borderRadius: 8,  
        borderSkipped: false,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#FF6347',
        anchor: 'end',
        align: 'top',
        offset: 0,
        font: {
          weight: 'bold',
          size: 14,
        },
        formatter: (value: any) => {
          return value;
        }
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 20,
          max: 100,
        },
      },
    },
    barThickness: 100,
  };
  const buttonConfigs = [
    { label: "Button 1", onClick: () => console.log("Button 1 clicked") },
    { label: "Button 2", onClick: () => console.log("Button 2 clicked") },
    { label: "Button 3", onClick: () => console.log("Button 3 clicked") },
  ];

  return (
    <div className='bar-chart'>
    <div style={{ width: '100%', margin: '0 auto' }}>
       <div className="chartButtons">
          {buttonConfigs.map((buttonConfig, index) => (
            <Button key={index} onClick={buttonConfig.onClick}>
              {buttonConfig.label}
            </Button>
          ))}
        </div>
      <h2 className='heading'>Leads</h2>
      <Bar data={data} options={options} />
    </div>

    </div>    
  );
};

export default BarChart;