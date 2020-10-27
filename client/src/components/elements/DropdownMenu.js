import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { StyledDropdown } from './../styles/StyledDropdown';

export const DropdownMenu = ({ callback }) => {
  function handleMenuClick(e) {
    callback(e.key);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        45 George Street, Sydney NSW 2000
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        33 Palmer Avenue, Melbourne VIC 3000
      </Menu.Item>
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
