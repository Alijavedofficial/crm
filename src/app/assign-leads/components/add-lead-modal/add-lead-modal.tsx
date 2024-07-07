"use client";
import React, { useState } from "react";
import { Button, Dropdown, Input, MenuProps, Modal, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./add-lead-modal.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const { Option } = Select;

const QuickAddLead = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const leadTypes: MenuProps["items"] = [
    {
      label: "Whatsapp",
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "Mail",
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Slack",
      key: "3",
    },
  ];
  const cities: MenuProps["items"] = [
    {
      label: "Lahore",
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "Karachi",
      key: "1",
    },
  ];
  const states: MenuProps["items"] = [
    {
      label: "Punjab",
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "Sindh",
      key: "1",
    },
  ];
  const countries: MenuProps["items"] = [
    {
      label: "Pakistan",
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "India",
      key: "1",
    },
  ];

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="add-lead-modal"
      closeIcon={<img src="/assets/close.svg" alt="close-icon" />}
    >
      <div className="wrapper">
        <span className="add-lead-modal-heading">Quick Add</span>
        <div className="add-lead-modal-container">
          <div className="input-container">
            Name
            <Input placeholder="Enter name" className="input-class" />
          </div>
          <div className="input-container">
            Lead Type
            <Dropdown menu={{ items: leadTypes }}>
              <a onClick={(e) => e.preventDefault()}>
                <Input
                  placeholder="Search for a lead"
                  className="dropdown-input"
                  suffix={<DownOutlined />}
                />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="add-lead-modal-container">
          <div className="input-container">
            Phone
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone || "")}
            />
          </div>
          <div className="input-container">
            Whatsapp
            <PhoneInput
              country={"in"}
              value={whatsapp}
              onChange={(whatsapp) => setWhatsapp(whatsapp || "")}
            />
          </div>
        </div>
        <div className="add-lead-modal-container">
          <div className="input-container">
            Email
            <Input placeholder="Enter email" className="input-class" />
          </div>
          <div className="input-container">
            City
            <Dropdown menu={{ items: cities }}>
              <a onClick={(e) => e.preventDefault()}>
                <Input
                  placeholder="Search for a city"
                  className="dropdown-input"
                  suffix={<DownOutlined />}
                />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="add-lead-modal-container">
          <div className="input-container">
            State
            <Dropdown menu={{ items: states }}>
              <a onClick={(e) => e.preventDefault()}>
                <Input
                  placeholder="Search for a state"
                  className="dropdown-input"
                  suffix={<DownOutlined />}
                />
              </a>
            </Dropdown>
          </div>
          <div className="input-container">
            Country
            <Dropdown menu={{ items: countries }}>
              <a onClick={(e) => e.preventDefault()}>
                <Input
                  placeholder="Search for a country"
                  className="dropdown-input"
                  suffix={<DownOutlined />}
                />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="save-btn-container">
          <Button className="save-btn">Save & Exit</Button>
        </div>
      </div>
    </Modal>
  );
};

export default QuickAddLead;
