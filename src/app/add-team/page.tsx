"use client";
import { Button, Checkbox, Input } from "antd";
import "./add-team.scss";
import React, { useState } from "react";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";

const agents = [
  { id: 1, name: "Oscar Holloway", imageUrl: "/assets/photo.svg" },
  { id: 2, name: "Leonard Rodriquez", imageUrl: "/assets/photo.svg" },
  { id: 3, name: "Owen Chambers", imageUrl: "/assets/photo.svg" },
  { id: 4, name: "Gabriel Flowers", imageUrl: "/assets/photo.svg" },
  { id: 5, name: "Violet Robbins", imageUrl: "/assets/photo.svg" },
  { id: 6, name: "Oscar Holloway", imageUrl: "/assets/photo.svg" },
  { id: 7, name: "Leonard Rodriquez", imageUrl: "/assets/photo.svg" },
  { id: 8, name: "Owen Chambers", imageUrl: "/assets/photo.svg" },
];

const App: React.FC = () => {
  const [selectedAgents, setSelectedAgents] = useState<number[]>([]);

  const toggleAgent = (agent: any) => {
    if (selectedAgents.includes(agent.id)) {
      setSelectedAgents(selectedAgents.filter((id) => id !== agent.id));
    } else {
      setSelectedAgents([...selectedAgents, agent.id]);
    }
  };

  const isAgentSelected = (id: number) => {
    return selectedAgents.includes(id);
  };
  return (
    <div className="add-team-wrapper">
      <div className="container">
        <p className="team-name">Add Team</p>
        <div className="info-section">
          <div className="half-width">
            <p>Team Name</p>
            <div className="input-wrapper">
              <Input placeholder=" Add Team Name" />
            </div>
          </div>
          <div className="half-width">
            <p> Search Team Lead</p>
            <div className="input-wrapper">
              <Input placeholder="Search Agent" prefix={<SearchOutlined />} />
            </div>
          </div>
        </div>
        <div>
          <p>Select Agents</p>
          <div className="agent-selection-section">
            <div className="border-right half-width">
              <div className="right-search-wrapper">
                <Input placeholder="Search" prefix={<SearchOutlined />} />
              </div>
              <div className="left-section">
                <div className="agent-list">
                  {agents.map((agent) => (
                    <div key={agent.id} className="agent-item">
                      <Checkbox
                        checked={isAgentSelected(agent.id)}
                        onChange={() => toggleAgent(agent)}
                      >
                        <div className="agent-checkbox-wrapper">
                          <img
                            src={agent.imageUrl}
                            alt={agent.name}
                            className="agent-image"
                          />
                          <span className="agent-name">{agent.name}</span>
                        </div>
                      </Checkbox>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="half-width">
              <div className="right-section">
                <p className="selected-agent-title">Selected Agents</p>
                <div className="selected-agent-layout">
                  {selectedAgents.map((id) => {
                    const agent = agents.find((agent) => agent.id === id);
                    return (
                      <div key={id} className="selected-agent">
                        <img
                          src={agent?.imageUrl}
                          alt={agent?.name}
                          className="selected-agent-image"
                        />
                        <span>{agent?.name}</span>
                        <CloseCircleOutlined
                          onClick={() => toggleAgent(agent)}
                          className="remove-agent-icon"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="save-btn-container">
          <Button className="save-btn">Save & Exit</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
