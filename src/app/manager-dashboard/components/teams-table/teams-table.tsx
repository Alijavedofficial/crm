"use client";

import React from "react";
import "./teams-table.scss";
import { Avatar, Card, Input } from "antd";
import { UserOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";

const TeamsTable = () => {
  const dummyData = [
    {
      id: 1,
      name: "Alice Johnson",
      teamName: "Lead Generation Team",
      agents: 10,
    },
    {
      id: 2,
      name: "Alice Johnson",
      teamName: "Lead Generation Team",
      agents: 10,
    },
    {
      id: 3,
      name: "Alice Johnson",
      teamName: "Lead Generation Team",
      agents: 10,
    },
    {
      id: 4,
      name: "Alice Johnson",
      teamName: "Lead Generation Team",
      agents: 10,
    },
    {
      id: 5,
      name: "Alice Johnson",
      teamName: "Lead Generation Team",
      agents: 10,
    }
  ];

  return (
    <Card className="teams-table-card">
      <div className="table-heading">
        <div className="revenue-side">
          <span className="heading">Teams</span>
        </div>
      </div>
      <div className="data-container">
        {dummyData.map((item) => (
          <div className="team-member-entity" key={item.id}>
            <div className="table-items-content">
              <span className="team-name">{item.teamName}</span>
              <div className="member-info">
                <span>{item.name}</span>
              </div>
            </div>
            <div className="agent-meta">
              <span>98+</span>
              <span>12 Agents</span>
            </div>
          </div>
        ))}
        <div className="view-more">
          View More
          <DownOutlined
            style={{
              marginLeft: 5,
            }}
          />
        </div>
      </div>
    </Card>
  );
};

export default TeamsTable;
