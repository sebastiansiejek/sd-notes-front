import AddNote from 'atoms/AddNoteButton'
import NoteEditor from 'organisms/NoteEditor'
import React from 'react'
import Sider from 'organisms/Sider'
import { Layout } from 'antd'
import { Modal } from 'antd'

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
        <Modal visible={true} title="Note" footer={[]} width="80%">
          <NoteEditor onChange={(e: any) => console.log(e)} />
        </Modal>
        <AddNote />
      </Content>
    </Layout>
  </Layout>
)
