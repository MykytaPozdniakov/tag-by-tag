import React, {useEffect, useState} from 'react';
import {Header} from "../../components";
import Sider from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import Footer from "../../components/Footer";
import {useAuth} from "../../AuthContext";
import {Layout, Menu, theme} from "antd";
import {UserOutlined} from "@ant-design/icons";
import CustomFooter from "../../components/Footer";
import CustomHeader from "../../components/Header";


function RequireAuth({children}) {
  let auth = useAuth();
  let location = useLocation();

  /* todo temporary for test */
  return children;

  if (!auth.isAuthenticated()) {
    return <Navigate to="/signin" state={{from: location}} replace/>;
  }

  return children;
}

const AuthLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  function getItem(
    label,
    key,
    icon,
    children,
  ) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('User', 'sub1', <UserOutlined/>, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <UserOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <UserOutlined/>),
  ];

  return (
    <RequireAuth>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ background: colorBgContainer }}
               collapsible collapsed={collapsed}
               onCollapse={(value) => setCollapsed(value)}
               className={"ant-layout-sider-light"} /* todo эта залупа (залупа - это "collapsible" параметр который позволяет сворачивать) не подхватывает стиль темы Light, а всегда берет Dark поэтому я явно указал стиль https://github.com/ant-design/ant-design/issues/10142*/
        >
          <Menu defaultSelectedKeys={['1']} mode="inline" items={items}/>
        </Sider>
        <Layout>
          <CustomHeader links={[]}/>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 1024,
              background: colorBgContainer,
           }}
          >
            <Outlet/>
          </Content>
          <CustomFooter/>
        </Layout>
      </Layout>
    </RequireAuth>
  );
}
export default AuthLayout;