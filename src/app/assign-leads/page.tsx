"use client";

import React, { useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType } from "antd";
import { Pagination } from "antd";
import "./assign-leads.scss";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
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
    <div className="assign-leads-wrapper">
      <div className="add-section">
        <div className="lead-add-card">+Quick Add Lead</div>
        <div className="bulk-add-card">+Bulk Upload Leads</div>
      </div>
      <div className="assign-leads">
        <div style={{ marginBottom: 16 }}>
          <span className="heading">Unassigned Leads</span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <div className="table-pagination">
          <Pagination total={70} defaultCurrent={1} showSizeChanger={false} />
        </div>
      </div>
    </div>
  );
};

export default App;
