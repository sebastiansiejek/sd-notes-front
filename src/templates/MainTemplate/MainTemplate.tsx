import React from 'react'
import Sider from 'organisms/Sider'
import { Layout } from 'antd'

const { Header, Content } = Layout

export default ({ children }: any) => (
  <Layout>
    <Sider />
    <Layout>
      <Header
        style={{
          position: 'fixed',
          right: 0,
          width: 'calc(100% - 200px)',
          zIndex: 9
        }}
      ></Header>
      <Content
        style={{
          margin: '100px 32px 32px'
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
)
