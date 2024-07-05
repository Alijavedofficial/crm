"use client";

import React from "react";
import { Button, Input, Modal } from "antd";
import "./assign-lead-modal.scss";

const AssignLeadsModal = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: Function;
}) => {
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
      <div className="content">
        <span className="assign-modal-heading">Leads Assign to Team</span>
        <Input
          className="search-team-input"
          placeholder="Search Team"
          prefix={<img src="/assets/search-gray.svg" />}
        />
        <Button className="save-btn">Save & Exit</Button>
      </div>
    </Modal>
  );
};
export default AssignLeadsModal;
