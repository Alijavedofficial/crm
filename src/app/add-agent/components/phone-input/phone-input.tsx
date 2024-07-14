import React from 'react';
import { Input, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './phone-input.scss'; 

const PhoneInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = React.useState('IN');

  const handleMenuClick = (e: any) => {
    setSelectedCountry(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="IN">
        <img src="/path/to/india-flag.png" alt="India" className="flag-icon" /> +91
      </Menu.Item>
      <Menu.Item key="US">
        <img src="/path/to/us-flag.png" alt="US" className="flag-icon" /> +1
      </Menu.Item>
      <Menu.Item key="UK">
        <img src="/path/to/uk-flag.png" alt="UK" className="flag-icon" /> +44
      </Menu.Item>
    </Menu>
  );

  const countryCodes: { [key: string]: string } = {
    'IN': '+91',
    'US': '+1',
    'UK': '+44',
  };

  return (
    <div className="phone-input-container">
      <div className="phone-input-wrapper">
        <Dropdown overlay={menu} trigger={['click']} className="country-code-dropdown">
          <div className="country-code">
            <img src={`/assets/${selectedCountry.toLowerCase()}-flag.png`} alt="flag" className="flag-icon" />
            <DownOutlined />
          </div>
        </Dropdown>
        <Input
          className="phone-input"
          placeholder={countryCodes[selectedCountry]}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
