"use client";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import "./manager-dashboard.scss";
import StatsCard from "./components/stats-card/stats-card";
import RevenueTable from "./components/revenue-table/revenue-table";
import AgentsTable from "./components/agents-table/agents-table";
import TeamsTable from "./components/teams-table/teams-table";

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="mg-das-wrapper">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="side-bar"
      ></Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="overall-stats">
            <div className="main-stat-card">
              <StatsCard name="Backlog" stats="288" icon="backlog.svg" />
            </div>
            <div className="main-stat-card">
              <StatsCard name="Demo Sent" stats="288" icon="demo-sent.svg" />
            </div>
            <div className="main-stat-card">
              <StatsCard name="Followup" stats="288" icon="follow-up.svg" />
            </div>
            <div className="main-stat-card">
              <StatsCard name="Won" stats="288" icon="won.svg" />
            </div>
            <div className="main-stat-card">
              <StatsCard name="Lost" stats="288" icon="lost.svg" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop:'22px'
            }}
          >
            <div className="table-card">
              <RevenueTable />
            </div>
            <div className="table-card">
              <AgentsTable />
            </div>
            <div className="table-card">
              <TeamsTable />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
