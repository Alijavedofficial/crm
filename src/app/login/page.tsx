"use client";

import React from "react";
import { Button, Form, Input, Checkbox } from "antd";
import "./Login.scss";
import Link from "next/link";
import { loginApi } from "@/services/auth";
import { useRouter } from "next/navigation";

const Login = () => {

  const router = useRouter()

  const onSubmit = async (values: any) => {
    console.log("values", values);
    try {
      const resp = await loginApi({
        email: values.email,
        password: values.password,
      });
      router.push('/manager-dashboard')
    } catch {}
  };

  return (
    <div className="loginFormWrapper">
      <div className="loginContent">
        <div>
          <img src="/assets/loginImage.svg"></img>
        </div>
        <div className="loginForm">
          <span className="loginHeading">Sign in</span>
          <Form
            layout="vertical"
            onValuesChange={() => {}}
            className="login-fields"
            onFinish={onSubmit}
          >
            <Form.Item name="email" label="Email Address">
              <Input
                placeholder="Enter your email address"
                className="custom-input"
                type="email"
                required
              />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input
                placeholder="Enter your password"
                className="custom-input"
                type="password"
                required
              />
            </Form.Item>
            <div className="remember-me-section">
              <Form.Item>
                <Checkbox className="remember-me">Remember me</Checkbox>
              </Form.Item>
              <Link href={"/forgot-password"}>
                <span className="forgot-link">Forgot Password</span>
              </Link>
            </div>
            <Form.Item>
              <Button type="primary" className="login-btn" htmlType="submit">
                Log in
                <img src="/assets/tiger-icon.png" alt="icon"></img>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
