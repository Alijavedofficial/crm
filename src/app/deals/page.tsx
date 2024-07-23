"use client";

import React, { useState } from "react";
import { Button, Layout, Menu, Select, Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import { Pagination } from "antd";
import Sider from "antd/es/layout/Sider";
import { assignedLeads, itemss } from "./data";
import "./deals.scss";
import SideDrawer from "./components/drawer/drawer";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  status: string[];
}

const App: React.FC = () => {
  const [isDeatilsOpen, setIsDetailsOpen] = useState(false);

  const columns: TableColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "icons",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Phone",
      dataIndex: "contact",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((status) => {
            let color = "#3F8CFF1F";
            return (
              <Tag style={{ color: "#3F8CFF" }} color={color} key={status}>
                {status}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Agent",
      dataIndex: "agent",
    },
    {
      title: "",
      dataIndex: "x",
      render: () => (
        <Button onClick={() => setIsDetailsOpen(true)} type="text" danger>
          View Details {">"}
        </Button>
      ),
    },
  ];

  return (
    <div
      style={{ marginTop: "-48px", marginLeft: "-24px" }}
      className="assign-leads-wrapper"
    >
      <Layout hasSider={true}>
        <Sider
          theme="light"
          width={215}
          style={{
            height: "100vh",
          }}
        >
          <Menu style={{ padding: "24px" }} items={itemss} />
        </Sider>
        <Layout>
          <div className="assign-leads">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <span className="heading">
                Assigned Leads
                <p className="sub-heading">
                  Total {assignedLeads.length} entries
                </p>
              </span>
              <div className="table-controls">
                <Select
                  defaultValue="Sort By Agent"
                  style={{ width: 169 }}
                  onChange={() => {}}
                  options={[
                    { value: "Agent 1", label: "Agent 1" },
                    { value: " Agent 2", label: "Agent 2" },
                    { value: "Agent3  ", label: "Agent 3" },
                    { value: "Clear Filter", label: "Clear Filter" },
                  ]}
                />
                <Select
                  defaultValue="Sort By: Date Created"
                  style={{ width: 235 }}
                  onChange={() => {}}
                  options={[
                    { value: "Date Created", label: "Date Created" },
                    { value: "Name", label: "Name" },
                    { value: "Status", label: "Status" },
                    { value: "Country", label: "Country" },
                    { value: "Clear Filter", label: "Clear Filter" },
                  ]}
                />
                <Button className="add-lead-btn" onClick={() => {}}>
                  Status
                </Button>
              </div>
            </div>
            <Table
              columns={columns}
              dataSource={assignedLeads}
              pagination={false}
            />
            <div className="table-pagination">
              <Pagination
                total={assignedLeads.length}
                defaultCurrent={1}
                showSizeChanger={false}
              />
            </div>
            <SideDrawer open={isDeatilsOpen} setOpen={setIsDetailsOpen} key={'details-modal'}  />
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
