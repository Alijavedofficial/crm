"use client";

import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Pagination } from "antd";
import "./add-agent.scss";
import { getAllUsers } from "@/services/users";
import CustomDropdown from "./components/custom-dropdown/custom-dropdown";
import AgentPosition from "./components/agent-position/agent-position";
import TeamDropdown from "./components/custom-simple-dropdown/team-dropdown.scss/custom-simple-dropdown";
import CustomSimpleDropdown from "./components/custom-simple-dropdown/team-dropdown.scss/custom-simple-dropdown";
import PhoneInput from "./components/phone-input/phone-input";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const handleMenuClick = (e: any) => {
  console.log('click', e);
};
const items = [
  {
    name: 'Oscar Holloway',
    avatar: '/assets/person.png',
    statusNumber: 203,
    languages: ['Hindi', 'Tamil', 'Telugu'],
    onClick: () => {}
  },
  {
    name: 'Another Agent',
    avatar: '/assets/person.png',
    statusNumber: 150,
    languages: ['English', 'Spanish'],
    onClick: () => {}
  },
];
const prod = [
  {
    position: 'Whatsapp Agent',
    statusNumber: 203,
    teamLead: 'Violet Robbins',
    teamLeadAvatar: '/assets/user.png',
    agents: [
      { name: 'Agent 1', avatar: '/assets/user.png' },
      { name: 'Agent 2', avatar: '/assets/person.png' },
      { name: 'Agent 3', avatar: '/assets/user.png' },
      { name: 'Agent 4', avatar: '/assets/person.png' },
      { name: 'Agent 5', avatar: '/assets/user.png' }
    ],
    onClick: () => { }
  },
  {
    position: 'Team 1',
    statusNumber: 203,
    teamLead: 'Violet Robbins',
    teamLeadAvatar: '/assets/person.png',
    agents: [
      { name: 'Agent 1', avatar: '/assets/user.png' },
      { name: 'Agent 2', avatar: '/assets/person.png' },
      { name: 'Agent 3', avatar: '/assets/user.png' },
      { name: 'Agent 4', avatar: '/assets/person.png' },
      { name: 'Agent 5', avatar: '/assets/user.png' }
    ],
    onClick: () => { }
  }
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const { Option } = Select;

const App: React.FC = () => {
  return (
    <>
      <div className="add-agent-wrapper">
        <div className="assign-leads">
          <div style={{ marginBottom: 16 }}>
            <span className="heading">Add Agent</span>
          </div>
        </div>
      <div className="agent-form-container">
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="agent-form"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
             <CustomDropdown items={items} />
          </Form.Item>

          <Form.Item
            label="Upload Picture"
            name="name"
            rules={[{ required: true, message: 'Please upload the file' }]}
          >
            <Upload className="custom-upload" showUploadList={false}>
        <Input
          className="upload-input"
          placeholder="Choose file to upload"
          readOnly
        />
        <Button icon={<UploadOutlined />} className="upload-button">
          Browse File
        </Button>
      </Upload>
            </Form.Item>

          <Form.Item
            label="Select Position"
            name="position"
            rules={[{ required: true, message: 'Please select the position!' }]}
          >
            <AgentPosition items={prod} />
          </Form.Item>
          <Form.Item
          label="Select Team"
            name="position"
            rules={[{ required: true, message: 'Please select the position!' }]}
          >
            <CustomSimpleDropdown  
              label="Select Team"
              defaultValue="Retention Team"
              options={[
                'Tiger Sports',
                'Exchange Calling',
                'Followup Agent Team',
                'Followup Agent Team 2'
              ]}/>
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: 'Please input the phone number!' }]}
          >
            <PhoneInput />
          </Form.Item>

          <Form.Item
            label="Whatsapp"
            name="whatsapp"
            rules={[{ required: true, message: 'Please input the Whatsapp number!' }]}
          >
           <PhoneInput />
          </Form.Item>

          <Form.Item
           label="Languages"
            name="languages"
            rules={[{ required: true, message: 'Please input the languages!' }]}
          >
                <CustomSimpleDropdown

          label="Languages"
        defaultValue="Hindi"
        options={[
          'Hindi',
          'English',
          'Spanish',
          'French'
        ]}
      />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input the address!' }]}
          >
            <Input  className="simple-input"/>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input the email!' }]}
          >
            <Input  className="simple-input"/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input the password!' }]}
          >
            <Input.Password  className="simple-input"/>
          </Form.Item>
          <Button className="agent-btn" >
         Save & Exit
          </Button>
        </Form>
      </div>
   
      </div>
    </>
  );
};

export default App;
