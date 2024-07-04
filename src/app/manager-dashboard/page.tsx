"use client";

import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import "./manager-dashboard.scss";
import StatsCard from "./components/stats-card/stats-card";
import RevenueTable from "./components/revenue-table/revenue-table";
import AgentsTable from "./components/agents-table/agents-table";
import TeamsTable from "./components/teams-table/teams-table";
import { getAllUsers } from "@/services/users";
import { getAllTeams } from "@/services/teams";

const App: React.FC = () => {
  const [agents, setAgents] = useState([]);
  const [teams,setTeams] = useState([])

  useEffect(() => {
    retriveAllAgents();
    retriveAllTeams();
  }, []);

  const retriveAllAgents = async () => {
    try {
      const users = await getAllUsers();
      setAgents(users.data.filter((item: any) => item.position === "Agent"));
    } catch {}
  };

  const retriveAllTeams = async () => {
    try {
      const teams = await getAllTeams();
      setTeams(teams.data);
    } catch {}
  };

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
          <AgentsTable data={agents} />
        </div>
        <div className="table-card">
          <TeamsTable data={teams} />
        </div>
      </div>
    </>
  );
};

export default App;
