"use client";

import { Input, Layout, Menu } from "antd";
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
                zIndex: 100,
              }}
            >
              <div>
                <img src="/assets/tiger-icon.png" />
              </div>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                className="side-icons"
                items={[
                  {
                    key: "1",
                    icon: <img src="/assets/menu.svg" />,
                    label: "nav 1",
                  },
                  {
                    key: "2",
                    icon: <img src="/assets/target.svg" />,
                    label: "nav 2",
                  },
                  {
                    key: "3",
                    icon: <img src="/assets/Deals.svg" />,
                    label: "nav 3",
                    className: "deals-icon",
                  },
                  {
                    key: "4",
                    icon: <img src="/assets/profile.svg" />,
                    label: "nav 3",
                    className: "profile-icon",
                  },
                  {
                    key: "5",
                    icon: <img src="/assets/Group.svg" />,
                    label: "nav 3",
                  },
                ]}
              />
              <div
                className="collapse-icon"
                onClick={() => setCollapsed((prev) => !prev)}
              >
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
                  paddingLeft: collapsed ? "75px" : "187px",
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
                  <div className="profile-section">
                    <img src="/assets/photo.svg" />
                    <img src="/assets/right.svg" />
                  </div>
                </div>
              </Header>
              <Content
                style={{
                  margin: "24px 67px",
                  marginLeft: !collapsed ? "187px" : "67px",
                  transition: "ease-in-out",
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
