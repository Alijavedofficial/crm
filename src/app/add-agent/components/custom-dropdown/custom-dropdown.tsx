import React, { useState } from 'react';
import { Dropdown, Menu, Button, Card, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './custom-dropdown.scss'; 



const { Meta } = Card;

interface DropdownItem {
    name: string;
    avatar: string;
    statusNumber: number;
    languages: string[];
    onClick: () => void;
}

interface CustomDropdownProps {
    items: DropdownItem[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(null);

    const handleMenuClick = (item: DropdownItem) => {
        setSelectedItem(item);
        item.onClick();
    };
    
    const menu = (
        <Menu>
            {items.map((item, index) => (
                <Menu.Item key={index} onClick={() => handleMenuClick(item)}>
                    <Card className="agent-card-wrapper">
                        <div className="name-wrapper">
                            <img src={item.avatar} alt="person" className="agent-img" />
                            <div className="details">
                                <span className="name">{item.name}</span>
                                <span className="status">
                                    Current Status <span className="status-number">{item.statusNumber}</span>
                                </span>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="language">
                            <p className="title">Languages</p>
                            <ul className="lang-list">
                                {item.languages.map((lang, idx) => (
                                    <li key={idx} className="lang">{lang}</li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
        <Button className='dropdown-btn-form'>
            {selectedItem ? (
                <div className="selected-item">
                    <Avatar src={selectedItem.avatar} />
                    <span>{selectedItem.name}</span>
                </div>
            ) : (
                'Select Name'
            )}
            <DownOutlined />
        </Button>
    </Dropdown>
    );
};

export default CustomDropdown;
