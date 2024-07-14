"use client";

import React from "react";
import "./revenue-table.scss";
import { Avatar, Card, Input } from "antd";
import { UserOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";

const RevenueTable = () => {
  const dummyData = [
    { id: 1, name: "John Doe", amount: 10000 },
    { id: 2, name: "Jane Smith", amount: 25000 },
    { id: 3, name: "Michael Johnson", amount: 18000 }
  ];

  const formatAmount = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Card className="revenue-table-card">
      <div className="table-heading">
        <div className="revenue-side">
          <span className="heading">Revenue</span>
          <span className="sub-heading">{`Today's Deposit`}</span>
        </div>
        <span className="stat-sum">₹ 288000</span>
      </div>

      <Input
        size="large"
        placeholder="Search"
        prefix={<SearchOutlined />}
        style={{
          marginBlock: 10,
        }}
      />
      <div>
        <div className="table-items-heading">
          <div>Agent Name</div>
          <div>Amount</div>
        </div>

        {dummyData.map((item) => (
          <div className="table-items-content" key={item.id}>
            <Avatar size={48} icon={<UserOutlined />} />
            <span className="agent-meta">
              <div className="name-heading">{item.name}</div>
              <div className="amount">+{formatAmount(item.amount)}</div>
            </span>
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

export default RevenueTable;
