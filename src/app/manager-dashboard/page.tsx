"use client";

import React, { useEffect, useState } from "react";
import "./manager-dashboard.scss";
import StatsCard from "../shared/components/stats-card/stats-card";
import RevenueTable from "./components/revenue-table/revenue-table";
import AgentsTable from "./components/agents-table/agents-table";
import TeamsTable from "./components/teams-table/teams-table";
import { getAllUsers } from "@/services/users";
import { getAllTeams } from "@/services/teams";
import TransactionsTable from "./components/transactions-table/transactions-table";
import SalesForecast from "./components/sales-forecast/sales-forecast";
import ObjectiveChart from "./components/objective-chart/objective-chart";
import withAuth from "../HOC/withAuth";
import { homeRevenue, homeStatsData } from "@/services/home";

const App: React.FC = () => {
  const [agents, setAgents] = useState([]);
  const [teams, setTeams] = useState([]);
  const [stats, setStats] = useState<any>([]);
  const [revenue, setRevenue] = useState<any>([]);


  useEffect(() => {
    retriveAllAgents();
    retriveAllTeams();
    retriveHomeStats();
    retriveRevenue();
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
      setTeams(teams.data?.data);
    } catch {}
  };

  const retriveHomeStats = async () => {
    try {
      const teams = await homeStatsData();
      setStats(teams.data);
    } catch {}
  };

  const retriveRevenue = async () => {
    try {
      const teams = await homeRevenue();
      setRevenue(teams.data);
    } catch {}
  };

  return (
    <>
      <div className="mg-dashboard-first-row">
        <div className="overall-stats">
          <div className="w-100">
            <div className="main-stat-card">
              <StatsCard
                name="Backlog"
                stats={stats?.BackLog}
                icon="backlog.svg"
              />
            </div>
            <div className="main-stat-card">
              <StatsCard
                name="Followup"
                stats={stats?.FollowUp}
                icon="follow-up.svg"
              />
            </div>
          </div>
          <div className="w-100">
            <div className="main-stat-card">
              <StatsCard name="Won" stats={stats?.Won} icon="won.svg" />
            </div>
            <div className="main-stat-card">
              <StatsCard name="Lost" stats={stats?.Loss} icon="lost.svg" />
            </div>
          </div>
        </div>
        <div className="table-card">
          <RevenueTable data={revenue} />
        </div>
        <div className="table-card">
          <TransactionsTable />
        </div>
      </div>
      <div className="mg-dashboard-second-row">
        <div className="forecast">
          <SalesForecast />
        </div>
        <div className="stat-cards-wrapper">
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

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: "22px",
        }}
      >
        <div className="table-card">
          <AgentsTable data={agents} />
        </div>
        <div className="table-card">
          <TeamsTable data={teams} />
        </div>
        <div className="objective-chart-wrapper">
          <ObjectiveChart percentage={25} value={2300} total={9200} />
        </div>
      </div>
    </>
  );
};

export default withAuth(App, ["Manager"]);
