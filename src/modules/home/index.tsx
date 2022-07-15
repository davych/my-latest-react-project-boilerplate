import type { MenuProps } from 'antd';
import { Layout, Menu, Col, Row } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const Home: React.FC = () => (
  <Layout>
    <Header className="header">
      <Row justify="space-between">
        <Col>
          <span style={{ color: 'white' }}>logo</span>
        </Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
          />
        </Col>
      </Row>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);

export default Home;
