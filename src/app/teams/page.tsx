"use client";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Pagination } from "antd";
import "./teams.scss";
import { getAllUsers } from "@/services/users";
import TeamCard from "./components/agent-card/team-card";
import { useRouter } from "next/navigation";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const prod = [
  {
    team: "Whatsapp Agent",
    statusNumber: 203,
    teamLead: "Violet Robbins",
    teamLeadAvatar: "/assets/user.png",
    revenue: 28800,
    agents: [
      { name: "Agent 1", avatar: "/assets/user.png" },
      { name: "Agent 2", avatar: "/assets/person.png" },
      { name: "Agent 3", avatar: "/assets/user.png" },
      { name: "Agent 4", avatar: "/assets/person.png" },
      { name: "Agent 5", avatar: "/assets/user.png" },
    ],
    onClick: () => {},
  },
  {
    team: "Team 1",
    statusNumber: 203,
    teamLead: "Violet Robbins",
    teamLeadAvatar: "/assets/person.png",
    revenue: 28800,
    agents: [
      { name: "Agent 1", avatar: "/assets/user.png" },
      { name: "Agent 2", avatar: "/assets/person.png" },
      { name: "Agent 3", avatar: "/assets/user.png" },
      { name: "Agent 4", avatar: "/assets/person.png" },
      { name: "Agent 5", avatar: "/assets/user.png" },
    ],
    onClick: () => {},
  },
];

const handleMenuClick = (e: any) => {
  console.log("click", e);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => {
  const router = useRouter();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [unassignedLeads, setUnassignedLeads] = useState([]);
  useEffect(() => {
    retriveAllAgents();
  }, []);

  const retriveAllAgents = async () => {
    try {
      const users = await getAllUsers();
      setUnassignedLeads(
        users.data.filter((item: any) => item.status === "inactive")
      );
    } catch {}
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleAddTeam = () => {
    router.push("add-team");
  };

  return (
    <>
      <div className="header-wrapper">
        <div style={{ marginBottom: 16 }}>
          <span className="heading">Teams</span>
        </div>
        <div className="btn-wrapper">
          <Button className="agent-btn" onClick={handleAddTeam}>
            <img src="/assets/add.svg" alt="add" className="add" /> Add Teams
          </Button>
        </div>
      </div>
      <div className="agent-cards">
        <ul className="agent-cards-list">
          <li>
            <TeamCard items={prod} />
          </li>
        </ul>
        <div className="assign-leads">
          <div className="table-pagination">
            <Pagination
              total={unassignedLeads.length}
              defaultCurrent={1}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
