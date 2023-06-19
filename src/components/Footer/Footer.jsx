import React from 'react';
import {Layout} from "antd";
const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
        <p>© 2023 My App. All rights reserved.</p>
    </Footer>
  );
};

export default CustomFooter;
