"use client";

import React from "react";
import "./teams-table.scss";
import { Avatar, Card, Input } from "antd";
import { UserOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";

const TeamsTable = ({ data }: { data: Array<any> }) => {

  return (
    <Card className="teams-table-card">
      <div className="table-heading">
        <div className="revenue-side">
          <span className="heading">Teams</span>
        </div>
      </div>
      <div className="data-container">
        {data.map((item) => (
          <div className="team-member-entity" key={item.id}>
            <div className="table-items-content">
              <span className="team-name">{item.name}</span>
              <div className="member-info">
                <span>{item.lead?.[0]?.name}</span>
              </div>
            </div>
            <div className="agent-meta">
              <span>98+</span>  
              <span>{item?.agent?.length} Agents</span>
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
