import { Flex, Layout, Modal } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import {
  HomeOutlined,
  LogoutOutlined,
  PhoneFilled,
  RadarChartOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import { useState } from "react";

function RootPage() {
  const { Content, Footer, Sider } = Layout;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout hasSider>
      <Sider
        width={80}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          color: "#fff",
        }}
      >
        <Flex vertical style={{ height: "100%" }}>
          <NavLink className={styles.navItem} to={"/home"}>
            <HomeOutlined />
          </NavLink>
          <NavLink className={styles.navItem} to={"/trap"}>
            <RadarChartOutlined />
          </NavLink>
          <NavLink
            className={styles.navItem}
            to={"/contact"}
            style={{ marginBottom: "auto" }}
          >
            <PhoneFilled />
          </NavLink>

          <Flex justify="center" style={{ margin: "auto auto 50px" }}>
            <div onClick={showModal} className={styles.navItem}>
              <LogoutOutlined />
            </div>
          </Flex>
        </Flex>
      </Sider>
      <Layout
        style={{
          minHeight: "100vh",
          marginLeft: 80,
          background: "#fff",
        }}
      >
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Copyright belongs to ...
        </Footer>
      </Layout>
      <Modal
        title="Log out"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
      >
        Do you want to log out?
      </Modal>
    </Layout>
  );
}

export default RootPage;
