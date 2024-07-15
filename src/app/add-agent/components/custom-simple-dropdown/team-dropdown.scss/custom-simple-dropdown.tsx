import React, { useState } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './custom-simple-dropdown.scss'; 

interface CustomDropdownProps {
  label: string;
  defaultValue: string;
  options: string[];
}

const CustomSimpleDropdown: React.FC<CustomDropdownProps> = ({ label, defaultValue, options }) => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultValue);

  const menu = (
    <Menu onClick={(e) => setSelectedItem(e.key)}>
      {options.map((option, index) => (
        <Menu.Item key={option}>
          <div className="dropdown-item">{option}</div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="custom-dropdown-container">
      <Dropdown overlay={menu} trigger={['click']} className="custom-dropdown dropdown-btn-form ">
        <Button className="dropdown-btn">
          {selectedItem} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default CustomSimpleDropdown;
