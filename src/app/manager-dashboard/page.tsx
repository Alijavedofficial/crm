"use client";

import React, { useEffect, useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import "./manager-dashboard.scss";
import StatsCard from "./components/stats-card/stats-card";
import RevenueTable from "./components/revenue-table/revenue-table";
import AgentsTable from "./components/agents-table/agents-table";
import TeamsTable from "./components/teams-table/teams-table";
import SalesForecast from "./components/sales-forecast/sales-forecast";
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
    <div className="main-container">
      <div className="overall-stats">
        <div className="main-stat-card">
          <StatsCard name="Backlog" stats="288" icon="backlog.svg" />
        </div>
        {/* <div className="main-stat-card">
          <StatsCard name="Followup" stats="208" icon="demo-sent.svg" />
        </div> */}
        <div className="main-stat-card">
          <StatsCard name="Followup" stats="208" icon="follow-up.svg" />
        </div>
        <div className="main-stat-card">
          <StatsCard name="Win" stats="243" icon="won.svg" />
        </div>
        <div className="main-stat-card">
          <StatsCard name="Lost" stats="88" icon="lost.svg" />
        </div>
      </div>
      <div className="overall-tables">
        <div className="table-card">
          <RevenueTable />
        </div>
        <div className="table-card">
          <AgentsTable data={agents} />
        </div>
      </div>
      <SalesForecast />
      <div className="other-stat-cards">
        <div className="other-stat-card">
          <StatsCard name="Incoming calls" stats="236" icon="phone_.svg" />
        </div>
        <div className="other-stat-card">
          <StatsCard name="Outgoing calls" stats="208" icon="pick_call.svg" />
        </div>
        <div className="other-stat-card">
          <StatsCard name="Successful" stats="135" icon="won.svg" />
        </div>
        <div className="other-stat-card">
          <StatsCard name="Lost" stats="43" icon="lost.svg" />
        </div>
      </div>
    </div>
  );
};

export default App;
