// SalesForecast.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './pie-chart.scss';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesForecast = () => {
  const timelineData = [
    { label: 'Today', value: 2300, transactions: 10 },
    { label: '5 days', value: 2350, transactions: 20 },
    { label: '10 days', value: 2380, transactions: 24 },
    { label: '15 days', value: 2520, transactions: 40 },
  ];

  const doughnutChartData = {
    datasets: [
      {
        data: [200, 50], // 250 is the value, 50 is the remaining to make a full circle
        backgroundColor: ['#d3d3d3','#ff6b00'],
        borderWidth: 0,
        
      },
    ],
  };

  const doughnutChartOptions = {
    cutout: '95%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: {
        display: false, // Disable datalabels
      },
    },
  };

  return (
    <div className='sales-forecas'>
      <h2>Sales forecast</h2>
      <div className='content'>
        <div className='timeline'>
          <div className='timepoints'>
            {timelineData.map((point, index) => (
              <div key={index} className='timepoint'>
                <span className='label'>{point.label}</span>
                <span className='value'>₹ {point.value}</span>
                <span className='subtext'>{point.transactions} transactions</span>
              </div>
            ))}
          </div>
          <div className='progress-bar'>
            <div className='progress' style={{width: '75%'}}></div>
          </div>
        </div>
        <div className='chart'>
          <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
          <div className='chart-center'>
            <span className='total'>total sales</span>
            <span className='amount'>250</span>
            <span className='currency'>₹ 23950</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesForecast;