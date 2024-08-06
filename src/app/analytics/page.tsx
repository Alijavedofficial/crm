"use client";

import React from "react";
import { Dropdown, Layout, Menu, Button } from "antd";
import Sider from "antd/es/layout/Sider";
import { items } from "./data";
import "./analytics.scss";
import SalesForecast from "./sales-forecast/sales-forecast";
import LineChart from './lineChart/lineChart'
import ProgressChart from './progress-bar/progress-bar';
import PieChart from './pie-chart/pie-chart'



const App: React.FC = () => {
  return (
    <div style={{ marginTop: "-48px", marginLeft: "-24px", display: "flex" }}>
      <div>
        <Layout hasSider={true}>
          <Sider
            theme="light"
            width={215}
            style={{
              height: "100vh",
            }}
          >
            <Menu style={{ padding: "24px" }} items={items} />
          </Sider>
        </Layout>
      </div>
      <div style={{margin:"20px"}}>
      <div>
        <Dropdown menu={{ items }} placement="topRight">
          <Button style={{ borderRadius: "24px" }}>topRight</Button>
        </Dropdown>
        <span className="Analytics">Analytics</span>
      </div>
      <div>
        <div className="forecast">
          <SalesForecast />
          <LineChart />
          <ProgressChart />
          <PieChart />
        </div>
      </div>
      <div>
        <div className="forecast">         
        </div>
      </div>
      </div>
     
    </div>
  );
};
export default App;
