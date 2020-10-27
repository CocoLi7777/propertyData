import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { StyledDropdown } from './../styles/StyledDropdown';

export const DropdownMenu = ({ callback, properties }) => {
  function handleMenuClick(e) {
    callback(e.key);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      {properties.map((item) => (
        <Menu.Item key={item.propertyId} icon={<UserOutlined />}>
          {item.propertyName}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <StyledDropdown id="components-dropdown-demo-dropdown-button">
      <Dropdown className="dropdown-content" overlay={menu}>
        <Button width="200px">
          Choose Property <DownOutlined />
        </Button>
      </Dropdown>
    </StyledDropdown>
  );
};
