"use client";

import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import { Pagination } from "antd";
import { getAllUsers } from "@/services/users";
import AssignLeadsModal from "./components/assign-lead-modal/assign-lead-modal";
import QuickAddLead from "./components/add-lead-modal/add-lead-modal";
import BulkUploadLead from "./components/bulk-upload-modal/bulk-upload-modal";
import "./assign-leads.scss";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  status: string[];
}

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
    title: "State",
    dataIndex: "state",
  },
];

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [unassignedLeads, setUnassignedLeads] = useState([]);
  const [isAssignLead, setIsAssignLead] = useState(false);
  const [quickAddLead, setQuickAddLead] = useState(false);
  const [bulkUploadLead, setBulkUploadLead] = useState(false);
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

  return (
    <>
      <div className="assign-leads-wrapper">
        <div className="add-section">
          <div className="lead-add-card" onClick={() => setQuickAddLead(true)}>
            +Quick Add Lead
          </div>
          <div
            className="bulk-add-card"
            onClick={() => setBulkUploadLead(true)}
          >
            +Bulk Upload Leads
          </div>
        </div>
        <div className="assign-leads">
          <div style={{ marginBottom: 16 }}>
            <span className="heading">Unassigned Leads</span>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={unassignedLeads}
            pagination={false}
          />
          <div className="table-pagination">
            <Pagination
              total={unassignedLeads.length}
              defaultCurrent={1}
              showSizeChanger={false}
            />
          </div>
          <Button className="assign-btn" onClick={() => setIsAssignLead(true)}>
            Assign
          </Button>
        </div>
      </div>
      <AssignLeadsModal
        isModalOpen={isAssignLead}
        setIsModalOpen={setIsAssignLead}
      />
      <QuickAddLead
        isModalOpen={quickAddLead}
        setIsModalOpen={setQuickAddLead}
      />
      <BulkUploadLead
        isModalOpen={bulkUploadLead}
        setIsModalOpen={setBulkUploadLead}
      />
    </>
  );
};

export default App;
