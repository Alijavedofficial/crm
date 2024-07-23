"use client"

import {
  UserOutlined,
  PhoneFilled,
  WhatsAppOutlined,
  DownloadOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Drawer, Avatar, Button, Divider, Select } from "antd";
import React from "react";
import "./drawer.scss";


const SideDrawer = ({ open, setOpen } :{
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const onClose = () => {
    setOpen(false);
  };

  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };
  const options = [
    { label: "Lead 1", value: "a10" },
    { label: "Lead 2", value: "a11" },
    { label: "Lead 3", value: "a12" },
    { label: "Lead 4", value: "a13" },
    { label: "Lead 5", value: "a14" },
    { label: "Lead 6", value: "a15" },
    { label: "Lead 7", value: "a16" },
    { label: "Lead 8", value: "a17" },
    { label: "Lead 9", value: "a18" },
    { label: "Lead 10", value: "a19" },
    { label: "Lead 11", value: "a20" },
  ];

  return (
    <Drawer
      width={906}
      placement="right"
      onClose={onClose}
      open={open}
      closable={false}
      bodyStyle={{ padding: "0px" }}
    >
      <div className="drawer-container">
        <div style={{ width: "800px" }} className="Row">
          <div className="agent-details">
            <div className="header">Agent</div>
            <div className="details">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{" "}
              <p>Robert</p>
            </div>
          </div>
          <div className="Date">
            <div className="title">Date</div>
            <div className="ddmyyyy">20th, January 2024</div>
          </div>
        </div>
        <div className="Row">
          <div className="customer-details">
            <div className="header">Customer Name</div>
            <p className="name">Robert</p>
          </div>
          <div className="actionButtons">
            <Button type="link">
              <UserOutlined /> Call Now
            </Button>
            <Divider
              type="vertical"
              style={{ height: "20px", background: "#DBEDFF" }}
            />
            <Button type="link">
              <PhoneFilled /> Whatsapp
            </Button>
            <Divider
              type="vertical"
              style={{
                height: "20px",
                background: "#DBEDFF",
                color: "#DBEDFF",
              }}
            />
            <Button type="link">
              <PhoneFilled /> SMS
            </Button>
            <Divider
              type="vertical"
              style={{ height: "20px", background: "#DBEDFF" }}
            />
            <Button type="link">
              <PhoneFilled /> Email
            </Button>
          </div>
        </div>
        <div className="Row" style={{ width: "760px" }}>
          <div className="column">
            <div>
              <p className="title">Current Status</p>
              <Select
                defaultValue="Select Stage"
                style={{ width: 169 }}
                onChange={handleChange}
                options={[
                  { value: "Agent 1", label: "Agent 1" },
                  { value: "Agent 2", label: "Agent 2" },
                  { value: "Agent 3", label: "Agent 3" },
                  { value: "Clear Filter", label: "Clear Filter" },
                ]}
              />
            </div>
            <div>
              <p className="title">City</p>
              <Select
                defaultValue="Select City"
                style={{ width: 169 }}
                onChange={handleChange}
                options={[
                  { value: "Agent 1", label: "Agent 1" },
                  { value: "Agent 2", label: "Agent 2" },
                  { value: "Agent 3", label: "Agent 3" },
                  { value: "Clear Filter", label: "Clear Filter" },
                ]}
              />
            </div>
          </div>
          <div className="column">
            <div>
              <p className="title">Lead Type</p>
              <div>
                <WhatsAppOutlined style={{ color: "green" }} />
                <Select
                  defaultValue="Whatsapp"
                  style={{ width: 169 }}
                  onChange={handleChange}
                  variant="borderless"
                  options={[
                    { value: "Agent 1", label: "Agent 1" },
                    { value: "Agent 2", label: "Agent 2" },
                    { value: "Agent 3", label: "Agent 3" },
                    { value: "Clear Filter", label: "Clear Filter" },
                  ]}
                />
              </div>
            </div>
            <div>
              <p className="title">Whatsapp Number</p>
              <p>+919837744472</p>
            </div>
            <div>
              <p className="title">State</p>
              <Select
                defaultValue="Select State"
                style={{ width: 169 }}
                onChange={handleChange}
                options={[
                  { value: "Agent 1", label: "Agent 1" },
                  { value: "Agent 2", label: "Agent 2" },
                  { value: "Agent 3", label: "Agent 3" },
                  { value: "Clear Filter", label: "Clear Filter" },
                ]}
              />
            </div>
          </div>
          <div className="column">
            <div style={{ width: "186px" }}>
              <p className="title">Source</p>
              <p>www.testingwebsite.com</p>
            </div>
            <div>
              <p className="title">Email</p>
              <p>testing@email.com</p>
            </div>
            <div>
              <p className="title">Country</p>
              <Select
                defaultValue="Select Country"
                style={{ width: 169 }}
                onChange={handleChange}
                options={[
                  { value: "Agent 1", label: "Agent 1" },
                  { value: "Agent 2", label: "Agent 2" },
                  { value: "Agent 3", label: "Agent 3" },
                  { value: "Clear Filter", label: "Clear Filter" },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="Row" style={{ justifyContent: "flex-start" }}>
          <div>
            <p className="title">Customer Interest</p>
            <Select
              mode="multiple"
              style={{ width: "366px" }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <p className="title">Estimated Deposit</p>
            <Select
              mode="multiple"
              style={{ width: "366px" }}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="Row" style={{ justifyContent: "center" }}>
          <Button
            style={{ backgroundColor: "#f48035" }}
            className="assign-btn"
            onClick={() => setOpen(false)}
          >
            Save & Update
          </Button>
        </div>
      </div>
      <div className="activityContainer">
        <div style={{ width: "475px" }} className="Row">
          <p className="title">Activity</p>
          <div className="date">Friday, 07 2024</div>
        </div>
        <div className="activity">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ margin: "0", fontWeight: 700 }}>Robert</p>
            <p style={{ margin: "0" }}>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="attachment">
              <span>
                <DownloadOutlined />
                <p>Download</p>
              </span>
              <span>
                <DownloadOutlined />
                <MenuFoldOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideDrawer;