"use client";

import React from "react";
import { Button, Form, Input, Checkbox } from "antd";
import "./Login.scss";
import Link from "next/link";

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
            <Form.Item label="Email Address">
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
            <div className="remember-me-section">
              <Form.Item>
                <Checkbox className="remember-me">Remember me</Checkbox>
              </Form.Item>
              <Link href={'/forgot-password'}>
                <span className="forgot-link">Forgot Password</span>
              </Link>
            </div>
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
