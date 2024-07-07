"use client";

import React, { useState } from "react";
import { Button, Checkbox, Image, Input, Modal } from "antd";
import "./assign-lead-modal.scss";

const AssignLeadsModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
  const teams = [
    { name: "Lead Master Team", members: ["Owen Chambers"] },
    { name: "GGP Lead Team", members: ["Gabriel Flowers"] },
    { name: "Digital Marketing Team", members: ["Violet Robbins"] },
    { name: "Retention Team", members: ["Oscar Holloway"] },
    { name: "Back Office Team", members: ["Leonard Rodriguez"] },
    { name: "Marketing Team", members: ["Owen Chambers"] },
  ];

  const [assignToMe, setAssignToMe] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="assign-lead-modal"
      footer={null}
      closeIcon={<img src="/assets/close.svg" alt="close-icon" />}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: "17px",
        }}
      >
        <div>
          <span className="assign-modal-heading">Leads Assign to Team</span>
        </div>
        <div className="assign-me">
          <Checkbox
            checked={assignToMe}
            onChange={(e) => setAssignToMe(e.target.checked)}
            className="assign-me-checkbox"
          >
            <span className="assign-me-text">Assign to me</span>
          </Checkbox>
        </div>
        <div className="content">
          <Input
            className="search-team-input"
            placeholder="Search Team"
            prefix={<img src="/assets/search-gray.svg" />}
          />
          <div>
            {teams.map((team, index) => (
              <div
                key={index}
                onClick={() => console.log(`Assigning to ${team.name}`)}
                className="modal-team-card"
              >
                <div className="team-name">{team.name}</div>
                <div className="team-members">
                  {team.members.map((member) => (
                    <div key={member}>
                      <Image
                        src="https://avatar.iran.liara.run/public/boy"
                        alt={member}
                        width={35}
                        height={35}
                        preview={false}
                      />
                      <span className="team-member-name">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="save-btn-container">
          <Button className="save-btn">Save & Exit</Button>
        </div>
      </div>
    </Modal>
  );
};
export default AssignLeadsModal;
