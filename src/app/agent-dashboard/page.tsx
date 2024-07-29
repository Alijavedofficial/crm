"use client";

import React from "react";
import "./agent-dashboard.scss";
import StatsCard from "../shared/components/stats-card/stats-card";
import withAuth from "../HOC/withAuth";
import RevenueTable from "../manager-dashboard/components/revenue-table/revenue-table";
import Backlog from "./components/backlog/backlog";

const App: React.FC = () => {
  return (
    <>
      <div className="lead-dashboard-first-row">
        <div className="lead-stat-card">
          <StatsCard name="Backlog" stats="288" icon="backlog.svg" />
        </div>
        <div className="lead-stat-card">
          <StatsCard name="Demo Sent" stats="288" icon="demo-sent.svg" />
        </div>
        <div className="lead-stat-card">
          <StatsCard name="Followup" stats="288" icon="follow-up.svg" />
        </div>
        <div className="lead-stat-card">
          <StatsCard name="Won" stats="288" icon="won.svg" />
        </div>
        <div className="lead-stat-card">
          <StatsCard name="Lost" stats="288" icon="lost.svg" />
        </div>
      </div>
      <div className="lead-dashboard-second-row">
        <div className="revenue-table">
          <RevenueTable title="My Revenue" showDescription={false} />
        </div>
        <div className="backlog-component">
          <Backlog/>
        </div>
      </div>
    </>
  );
};

export default withAuth(App, ["Agent"]);
