"use client";

import { Input, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.scss";

const { Header, Sider, Content } = Layout;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();

  const authRoutes = ["/login", "/forgot-password"];

  return (
    <html lang="en">
      <body
        style={{
          margin: "unset",
        }}
      >
        {!authRoutes.includes(pathname) ? (
          <Layout className="mg-das-wrapper">
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              className="side-bar"
              style={{
                overflow: "hidden",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
                zIndex:100
              }}
            >
              <div>
                <img src="/assets/tiger-icon.png" />
              </div>
              <div className="side-icon-styles">
                <img src="/assets/menu.svg" />
              </div>
              <div className="side-icon-styles">
                <img src="/assets/target.svg" />
              </div>
              <div>
                <img src="/assets/Deals.svg" />
              </div>
              <div className="side-icon-styles p-15">
                <img src="/assets/profile.svg" />
              </div>
              <div className="side-icon-styles">
                <img src="/assets/Group.svg" />
              </div>
              <div className="collapse-icon">
                <img src="/assets/collapse-icon.svg" />
              </div>
            </Sider>
            <Layout>
              <Header
                style={{
                  padding: 0,
                  background: "#ffffff",
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingLeft:'75px'
                }}
              >
                <span className="platform-name">Tiger Sports</span>
                <div className="header-right-side">
                  <Input
                    type="search"
                    className="header-search"
                    prefix={<img src="/assets/search.svg" />}
                    placeholder="Search"
                  />
                  <img src="/assets/notifications.svg" />
                  <img src="/assets/photo.svg" />
                  <img src="/assets/right.svg" />
                </div>
              </Header>
              <Content
                style={{
                  margin: "24px 67px",
                  padding: 24,
                  minHeight: 280,
                }}
              >
                {children}
              </Content>
            </Layout>
          </Layout>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
