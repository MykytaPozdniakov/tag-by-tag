import React from 'react';
import { Link } from 'react-router-dom';
import {Layout, Menu, Dropdown, Button, theme} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as AuthContext from '../../AuthContext';

const { Header } = Layout;

const CustomHeader = ({ links }) => {
  const auth = AuthContext.useAuth();

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/options">Options</a>
      </Menu.Item>
      <Menu.Item>
        <Button type="link" onClick={() => auth.logout()}>Logout</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: colorBgContainer }}>
      <Menu mode="horizontal">
        <Menu.Item key="main-page">
          <Link to="/admin">Main page</Link>
        </Menu.Item>
        <Menu.Item key="home">
          <Link to="/admin/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="project">
          <Link to="/admin/project">Project</Link>
        </Menu.Item>
        {links.map((link, index) => (
          <Menu.Item key={index}>
            <Link to={link.url}>{link.name}</Link>
          </Menu.Item>
        ))}
        {auth.isAuthenticated() ? (
          <Menu.Item key="user-profile">
            <Dropdown overlay={menu} placement="bottomRight">
              <Button type="link" icon={<UserOutlined />}>{'qweqwe'}</Button>
            </Dropdown>
          </Menu.Item>
        ) : (
          <Menu.Item key="singin">
            <Link to="/signin">Sign in</Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default CustomHeader;
