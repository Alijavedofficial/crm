"use client";
import React from "react";
import { Dropdown, Card, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./agent-card.scss";

const AgentCard = () => {
  const items = [
    {
      key: '1',
      label: 'Modify',
    },
    {
      key: '2',
      label: 'Deactivate',
    },
    {
      key: '3',
      label: 'Reactivate',
    },
  ];

  return (
    
    <Card className="agent-card-wrapper">
      <div className="name-wrapper">
        <img src="/assets/person.png" alt="person" className="agent-img"/>
        <div className="details">
          <span className="name">Oscar Holloway</span>
          <span className="status">
            Current Status <span className="status-number">203</span>
          </span>
        </div>
      </div>
      <ul className="status-list">
        <li>
          <p className="title">Won</p>
          <span className="number">500</span>
        </li>
        <li>
          <p className="title">Lost</p>
          <span className="number">500</span>
        </li>
        <li>
          <p className="title">Total</p>
          <span className="number">500</span>
        </li>
      </ul>
      <div className="divider"></div>
      <div className="language">
        <p className="title">Languages</p>
        <ul className="lang-list">
          <li>Hindi</li>
          <li>Telugu</li>
          <li>Tamil</li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="position">
        <p className="title">Position</p>
        <span className="designation">Customer Support Agent</span>
      </div>
      <div className="divider"></div>
      <div className="team">
        <div className="team-name">
          <p className="title">Team</p>
          <span className="designation">GGP Lead Team</span>
        </div>
        <Dropdown className="more"
        menu={{
          items
        }}
        placement="bottomRight"
        overlayClassName="more-dropdown"
      >
        <Button className="more-btn"><img src="/assets/more.svg" alt="more" /></Button>
      </Dropdown>
      </div>
    </Card>
  );
};

export default AgentCard;
