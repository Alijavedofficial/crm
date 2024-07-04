"use client";

import React from "react";
import "./agents-table.scss";
import { Avatar, Card, Input } from "antd";
import { UserOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";

const AgentsTable = ({ data }: { data: Array<any> }) => {
  const dummyData = [
    { id: 1, name: "Alice Johnson", amount: 10 },
    { id: 2, name: "Bob Smith", amount: 25 },
    { id: 3, name: "Charlie Brown", amount: 18 },
    { id: 4, name: "Daisy Lee", amount: 30 },
    { id: 5, name: "Ella Clark", amount: 15 },
    { id: 6, name: "Frank Davis", amount: 22 },
    { id: 7, name: "Grace Martinez", amount: 280 },
    { id: 8, name: "Henry Wilson", amount: 32 },
  ];

  return (
    <Card className="agents-table-card">
      <div className="table-heading">
        <div className="revenue-side">
          <span className="heading">Agents</span>
          <span className="sub-heading">Includes All Teams</span>
        </div>
        <span className="stat-sum">{data.length}</span>
      </div>

      <Input
        size="large"
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{
          marginBlock: 10,
        }}
      />
      <div className="container">
        <div className="table-items-heading">
          <div>Agent Name</div>
          <div>Leads</div>
        </div>

        <div>
          {data.map((item) => (
            <div className="table-items-content" key={item.id}>
              <Avatar size={48} icon={<UserOutlined />} />
              <div className="name-heading">{item.name}</div>
              <div
                className={`amount`}
                // className={`amount ${item.amount > 200 ? "high-amount" : ""}`}
              >
                {100}
              </div>
            </div>
          ))}
        </div>
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

export default AgentsTable;
