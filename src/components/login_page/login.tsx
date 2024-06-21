"use client";

import React from "react";
import { Button, Form, Input, Radio } from "antd";
import "./Login.scss";

export default function Login() {
  const [form] = Form.useForm();
  return (
    <div className="loginFormWrapper">
      <div className="loginContent">
        <div>
          <img src="/assets/loginImage.svg"></img>
        </div>
        <div className="loginForm">
          <span className="loginHeading">Sign in</span>
          <Form
            form={form}
            layout="vertical"
            onValuesChange={() => {}}
            className="login-fields"
          >
            <Form.Item label="Email">
              <Input
                placeholder="Enter your email address"
                className="custom-input"
              />
            </Form.Item>
            <Form.Item label="Password">
              <Input
                placeholder="Enter your password"
                className="custom-input"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="login-btn">
                Log in
                <img src="/assets/tiger-icon.png"></img>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
