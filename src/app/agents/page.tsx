"use client";

import React, { useEffect, useState } from "react";
import { Button, Dropdown, Space } from "antd";
import { Pagination } from "antd";
import { getAllUsers } from "@/services/users";
import AgentCard from "./components/agent-card/agent-card";
import "./agents.scss";
import { useRouter } from "next/navigation";


interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const handleMenuClick = (e: any) => {
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const App: React.FC = () => {
  const [unassignedLeads, setUnassignedLeads] = useState([]);

  const router = useRouter()

  useEffect(() => {
    retriveAllAgents();
  }, []);

  const retriveAllAgents = async () => {
    try {
      const users = await getAllUsers();
      setUnassignedLeads(
        users.data.filter((item: any) => item.status === "inactive")
      );
    } catch { }
  };

  const navigate = (url:string) =>{
    router.push(url)
  }


  return (
    <>
      <div className="header-wrapper">
        <div style={{ marginBottom: 16 }}>
          <span className="heading">Agents</span>
        </div>
        <div className="btn-wrapper">
          <Dropdown menu={menuProps} className="agent-btn download-btn">
            <Button>
              <Space>
                Weekly <img src="/assets/arrow-down.svg" alt="arrow-down" className="arrow"/>
              </Space>
            </Button>
          </Dropdown>
          <Button className="agent-btn" onClick={()=>navigate('/add-agent')} >
          <img src="/assets/add.svg" alt="add" className="add"/> Add Agents
          </Button>
        </div>
      </div>
      <div className="agent-cards">
        <ul className="agent-cards-list">
          <li>
            <AgentCard />
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
