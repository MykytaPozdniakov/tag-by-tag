import React from 'react';
import {Form, Input, Button, Checkbox, Card, Row} from "antd";
import {UserOutlined, LockOutlined} from "@ant-design/icons";

const SigninPage = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    console.log("Handle password recovery logic here");
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("Handle registration logic here");
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
      <Card style={{width: 500}} title="Sign in">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{remember: true}}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{required: true, message: "Please input your Username!"}]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon"/>}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{required: true, message: "Please input your Password!"}]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Password"
            />

          </Form.Item>
          <Button
            type="link"
            style={{float: "right", padding: 0}}
            className="login-form-forgot"
            onClick={handleForgotPassword}
          >
            Forgot password
          </Button>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
            Don't have an account{" "}
            <Button style={{padding: 0}} type="link" onClick={handleRegister}>
              sign up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
  );
};

export default SigninPage;

