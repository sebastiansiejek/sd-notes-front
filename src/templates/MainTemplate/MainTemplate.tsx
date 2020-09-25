import React from 'react'
import { Layout } from 'antd'
import Sider from 'organisms/Sider'

const { Header, Content } = Layout

export default ({ children }: any) => (
  <Layout>
    <Sider />
    <Layout>
      <Header
        style={{
          position: 'fixed',
          right: 0,
          width: 'calc(100% - 200px)'
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
