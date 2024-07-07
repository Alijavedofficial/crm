import React from "react";
import {
  Modal,
  Upload,
  Button,
  message,
  UploadProps,
  Dropdown,
  MenuProps,
  Input,
} from "antd";
import "./bulk-upload-modal.scss";
import { UploadOutlined, DownOutlined } from "@ant-design/icons";

const BulkUploadLead = ({
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

  const items: MenuProps["items"] = [
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

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="bulk-upload-modal"
      closeIcon={<img src="/assets/close.svg" alt="close-icon" />}
    >
      <div className="bulk-upload-modal-container">
        <div>
          <span className="bulk-upload-modal-heading">Bulk Upload</span>
        </div>
        <div className="dropdown-container">
          <h3 className="dropdown-heading">Lead Type</h3>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Input
                placeholder="Search for a lead"
                className="dropdown-input"
                suffix={<DownOutlined />}
              />
            </a>
          </Dropdown>
        </div>
        <div className="dropdown-container">
          <h3 className="dropdown-heading">Upload File</h3>
          <div className="upload-input">
            <div className="upload-text">
              <p
                style={{
                  marginBlock: "8px",
                  paddingInline: "10px",
                  color: "#b6b5b5",
                }}
              >
                Click or drag file to this area to upload
              </p>
            </div>
            <Upload {...props}>
              <Button icon={<UploadOutlined />} className="upload-btn">
                Browse Files
              </Button>
            </Upload>
          </div>
          <span>File Type: .xlsx .xls .cvs</span>
        </div>
        <div className="save-btn-container">
          <Button className="save-btn">Save & Exit</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BulkUploadLead;
