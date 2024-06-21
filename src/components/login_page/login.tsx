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
            <Form.Item label="Field A">
              <Input
                placeholder="Enter your email address"
                className="custom-input"
              />
            </Form.Item>
            <Form.Item label="Field B">
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

      {/* <div className={styles.signinDiv}>
        <div>
       <h1 className={styles.SigninLabel}>Sign In</h1>
       <div>
       <label htmlFor="emailAdress" className={styles.Email} >Email Address</label>
       <input className={styles.input} >
        
        
       </input>
       </div>
       <div>
       <label htmlFor="password" className={styles.Email} >Password</label>
       <input className={styles.input}>
        
        
       </input>
       </div>
       </div>
      </div> */}
    </div>
  );
}
