import React, { useEffect, useRef } from "react";
import { Select } from "antd";
import CurrencyRupee from "@ant-design/icons";
import "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./objective-chart.scss";

ChartJS.register(DoughnutController, ArcElement, Tooltip, Legend);

const { Option } = Select;

interface ObjectiveChartProps {
  percentage: number;
  value: number;
  total: number;
}

const ObjectiveChart: React.FC<ObjectiveChartProps> = ({
  percentage,
  value,
  total,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<ChartJS<
    "doughnut",
    number[],
    unknown
  > | null>(null);

  useEffect(() => {
    const ctx = chartRef.current!.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new ChartJS(ctx!, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [percentage, 100 - percentage],
            backgroundColor: ["#ff6600", "#e6e6e6"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "80%",
        plugins: {
          datalabels: {
            display: false,
          },
        },
        events: [],
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [percentage]);

  return (
    <div className="objective-chart">
      <div className="container">
        <h3 className="header">Objectives</h3>
        {/* <Select defaultValue="budget" className="select">
          <Option value="budget">budget</Option>
          <Option value="quantity">quantity</Option>
        </Select> */}
        <div className="chartContainer">
          <canvas ref={chartRef} className="chart"></canvas>
          <div className="percentage">{percentage}%</div>
        </div>
        <div className="valueContainer">
          <CurrencyRupee className="currencyIcon" />
          <span className="value">{value}</span>
        </div>
        <div className="total">out of {total}</div>
      </div>
    </div>
  );
};

export default ObjectiveChart;
