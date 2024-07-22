"use client";

import React from "react";
import { Button, Form, Input, Radio } from "antd";
import "./forgot-password.scss";

export default function ForgotPassword() {
  const [form] = Form.useForm();
  return (
    <div className="loginFormWrapper">
      <div className="loginContent">
        <div>
          <img src="/assets/loginImage.svg"></img>
        </div>
        <div className="loginForm">
          <span className="loginHeading">Forgot Password</span>
          <Form
            form={form}
            layout="vertical"
            onValuesChange={() => {}}
            className="login-fields"
          >
            <Form.Item label="Email Address">
              <Input
                prefix={<img src="/assets/email-icon.svg" />}
                placeholder="Enter your email address"
                className="custom-input"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="login-btn">
                Submit
                <img src="/assets/tiger-icon.png"></img>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
