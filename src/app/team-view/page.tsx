"use client";
import { Button, Input, Table } from "antd";
import "./team-view.scss";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const teamData = {
  teamLead: {
    name: "Violet Robbins",
    subHeading: "Team Lead",
    imageUrl: "/assets/photo.svg",
  },
  metrics: [
    { title: "Revenue", value: "₹ 28,800", day: "Today", id: 1 },
    { title: "Agents", value: "18", day: "", id: 2 },
    { title: "Backlog", value: "97985", day: "Today", id: 3 },
    { title: "Demo Sent", value: "567", day: "Today", id: 4 },
    { title: "Followup", value: "8990", day: "Today", id: 5 },
    { title: "Won", value: "101", day: "Today", id: 6 },
    { title: "Lost", value: "2000", day: "Today", id: 7 },
  ],
};

const data = [
  {
    key: "1",
    name: "Gabriel Flowers",
    number: 250,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "2",
    name: "Violet Robbins",
    number: 250,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "3",
    name: "Oscar Holloway",
    number: 99,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "4",
    name: "Leonard Rodriquez",
    number: 250,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "5",
    name: "Owen Chambers",
    number: 200,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "6",
    name: "Owen Chambers",
    number: 189,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "7",
    name: "Gabriel Flowers",
    number: 167,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "8",
    name: "Violet Robbins",
    number: 64,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "9",
    name: "Oscar Holloway",
    number: 45,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "10",
    name: "Leonard Rodriquez",
    number: 89,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "11",
    name: "Violet Robbins",
    number: 64,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "12",
    name: "Owen Chambers",
    number: 200,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "13",
    name: "Gabriel Flowers",
    number: 167,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
  {
    key: "14",
    name: "Violet Robbins",
    number: 64,
    backlog: 80,
    demosent: 55,
    followup: 10,
    won: 44,
    lost: 5,
  },
];

const columns = [
  {
    title: "Agents",
    dataIndex: "name",
    key: "name",
    render: (
      text: any,
      record: {
        number: any;
      }
    ) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 10,
          width: "100%",
        }}
      >
        <span>{text}</span>
        <span
          className={
            record.number > 200 ? "number-tag-red" : "number-tag-green"
          }
        >
          {record.number}
        </span>
      </div>
    ),
  },
  {
    title: "Backlog",
    dataIndex: "backlog",
    key: "backlog",
  },
  {
    title: "Demosent",
    dataIndex: "demosent",
    key: "demosent",
  },
  {
    title: "Followup",
    dataIndex: "followup",
    key: "followup",
  },
  {
    title: "Won",
    dataIndex: "won",
    key: "won",
  },
  {
    title: "Lost",
    dataIndex: "lost",
    key: "lost",
  },
];

const App: React.FC = () => {
  return (
    <div className="team-view-wrapper">
      <div className="container">
        <div className="left-side">
          <p className="team-name">Team Name</p>
          <p className="team-subtitle">{teamData.teamLead.subHeading}</p>
          <div className="team-lead">
            <div className="team-lead-info">
              <img
                src={teamData.teamLead.imageUrl}
                alt={teamData.teamLead.name}
              />
              <span className="lead-name">{teamData.teamLead.name}</span>
            </div>
            <Button type="link" className="modify-button">
              Modify {" >"}
            </Button>
          </div>
          {teamData.metrics.map((metric) => (
            <div className="metric" key={metric.id}>
              <div className="metric-info">
                <span className="metric-title">{metric.title}</span>
                <span className="metric-day">{metric.day}</span>
              </div>
              <span className="metric-value">{metric.value}</span>
            </div>
          ))}
        </div>
        <div className="right-side">
          <Table
            dataSource={data}
            columns={columns}
            bordered
            pagination={false}
            title={() => (
              <Input placeholder="Search" prefix={<SearchOutlined />} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
