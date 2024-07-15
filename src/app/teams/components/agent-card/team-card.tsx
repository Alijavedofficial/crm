"use client";
import React from 'react';
import { Dropdown, Menu, Button, Card, Avatar, Badge } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import "./team-card.scss";

interface TeamUser {
  team: string;
  statusNumber: number;
  teamLead: string;
  teamLeadAvatar: string;
  revenue: number;
  agents: { name: string; avatar: string }[];
  onClick: () => void;
}

interface TeamCardProps {
  items: TeamUser[];
}

const TeamCard: React.FC<TeamCardProps> = ({ items }) => {
  const options = [
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
    <div className="team-card-container">
      {items.map((item, index) => (
        <Card key={index} className="agent-card-wrapper">
          <div className="name-wrapper">
            <div className="details">
              <span className="name-title">{item.team}</span>
              <span className="status">
                Current Status <span className="status-number">{item.statusNumber}</span>
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
          <div className="revenue">
            <p className="rev-title">Revenue<span className="subtitle">${item.revenue}</span></p>
          </div>
          <div className="divider"></div>
          <span>Team Lead</span>
          <div className="team-lead">
            <div className='person-rank'>
              <img src={item.teamLeadAvatar} alt="user" className="prem-user" />
              <p className="name-title">{item.teamLead}</p>
              <img src="/assets/crown.png" alt="premium" className='crown'/>
            </div>
          </div>
          <div className="divider"></div>
          <span className='agents-title'>Agents</span>
          <div className="agents">
            <div className="agent-avatars">
              {item.agents.slice(0, 3).map((agent, idx) => (
                <Avatar key={idx} src={agent.avatar} className="agent-avatar" />
              ))}
              {item.agents.length > 3 && (
                <div className="additional-count">
                  +{item.agents.length - 3}
                </div>
              )}
            </div>
          </div>
          <Dropdown
            overlay={<Menu items={options} />}
            placement="bottomRight"
            overlayClassName="more-dropdown"
          >
            <Button className="more-btn"><img src="/assets/more.svg" alt="more" /></Button>
          </Dropdown>
        </Card>
      ))}
    </div>
  );
};

export default TeamCard;
