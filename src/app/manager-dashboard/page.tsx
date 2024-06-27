"use client";

import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import "./manager-dashboard.scss";
import StatsCard from "./components/stats-card/stats-card";
import RevenueTable from "./components/revenue-table/revenue-table";
import AgentsTable from "./components/agents-table/agents-table";
import TeamsTable from "./components/teams-table/teams-table";



const App: React.FC = () => {

  return (
    <>
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
          marginTop: "22px",
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
    </>
  );
};

export default App;
