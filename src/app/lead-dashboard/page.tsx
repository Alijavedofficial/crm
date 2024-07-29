"use client";

import React from "react";
import "./lead-dashboard.scss";
import StatsCard from "../shared/components/stats-card/stats-card";
import withAuth from "../HOC/withAuth";
import RevenueTable from "../manager-dashboard/components/revenue-table/revenue-table";
import MyTeamView from "./components/my-team-view/my-team";

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
          <RevenueTable title="Team Revenue" />
        </div>
        <div className="my-team-view">
          <MyTeamView />
        </div>
      </div>
    </>
  );
};

export default withAuth(App, ["Lead"]);
