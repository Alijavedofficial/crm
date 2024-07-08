"use client";

import React, { useState } from "react";
import "./transactions-table.scss";
import { Avatar, Card, Input } from "antd";
import { UserOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";

const TransactionsTable = () => {
  const dummyData = [
    { id: 1, name: "John Doe", amount: 10000 },
    { id: 2, name: "Jane Smith", amount: 25000 },
    { id: 3, name: "Michael Johnson", amount: 18000 },
  ];

  const formatAmount = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Card className="transactions-table-card">
      <div className="table-heading">
        <div className="revenue-side">
          <span className="heading">Tranasaction</span>
          <span className="sub-heading">80</span>
        </div>
        <span className="stat-sum">fortoday</span>
      </div>
      <div>
        {dummyData.map((item) => (
          <div className="table-items-content" key={item.id}>
            <Avatar size={48} icon={<UserOutlined />} />
            <div className="name-heading">{item.name}</div>
            <div className="amount">+{formatAmount(item.amount)}</div>
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

export default TransactionsTable;
