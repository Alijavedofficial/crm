import React, { useState } from 'react';
import { Dropdown, Menu, Button, Card, Avatar, Badge } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './agent-position.scss'; // Import your custom styles

const { Meta } = Card;

interface DropdownItem {
  position: string;
  statusNumber: number;
  teamLead: string;
  teamLeadAvatar: string;
  agents: { name: string; avatar: string }[];
  onClick: () => void;
}

interface AgentPosition {
  items: DropdownItem[];
}

const AgentPosition: React.FC<AgentPosition> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

  const handleMenuClick = (item: DropdownItem) => {
    setSelectedItem(item);
    item.onClick();
  };

  const menu = (
    <Menu>
      {items.map((item, index) => (
        <Menu.Item key={index} onClick={() => handleMenuClick(item)}>
          <Card className="custom-card" bordered={false}>
            <div className="card-content">
              <div className="card-header">
                <div className="position">
                  <strong>{item.position}</strong>
                  <div className="status">
                    Current Status <Badge count={item.statusNumber} style={{ backgroundColor: '#fa541c' }} />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="team-lead">
                  <span>Team Lead</span>
                  <Meta
                    avatar={<Avatar src={item.teamLeadAvatar} />}
                    title={item.teamLead}
                    className='person-rank'
                  />
                  <img src="/assets/crown.png" alt="premium" className='crown'/>
                </div>
                <div className="divider"></div>
                <div className="agents">
                  <span className='agents-title'>Agents</span>
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
              </div>
            </div>
          </Card>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} className='dropdown-btn-form'>
      <Button className="selected-item-button">
        {selectedItem ? (
          <div className="selected-item">
            <span>{selectedItem.position}</span>
            <div className="team-lead-selected">
              <span className='team-title'>Team Lead</span>
              <div className='cover'>
              <Avatar src={selectedItem.teamLeadAvatar} />
              <span>{selectedItem.teamLead}</span>
              <img src="/assets/crown.png" alt="premium" className='crown'/>
              </div>
            </div>
          </div>
        ) : (
          ''
        )} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default AgentPosition;
