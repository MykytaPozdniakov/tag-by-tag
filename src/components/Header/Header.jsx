import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { AuthContext } from '../../AuthContext';

const { Header } = Layout;

const HeaderComponent = ({ links }) => {
  const auth = AuthContext.useAuth();

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
    <Header>
      <Menu theme="dark" mode="horizontal">
        {links.map((link, index) => (
          <Menu.Item key={index}>
            <Link to={link.url}>{link.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
      {auth.isAuthenticated() ? (
        <Dropdown overlay={menu} placement="bottomRight">
          <Button type="link" icon={<UserOutlined />}>{auth.user.name}</Button>
        </Dropdown>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
    </Header>
  );
};

export default HeaderComponent;
