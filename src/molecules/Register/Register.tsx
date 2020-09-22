import React from 'react'
import { Form, Input, Button } from 'antd'
import { SmileTwoTone, MailTwoTone, LockTwoTone } from '@ant-design/icons'

export default ({ onSubmit }: any) => (
  <>
    <Form onFinish={onSubmit}>
      <Form.Item
        name="name"
        rules={[{ required: false, message: 'Please input your username!' }]}
      >
        <Input placeholder="name" prefix={<SmileTwoTone />} />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: false, message: 'Please input your email!' }]}
      >
        <Input placeholder="email" type="email" prefix={<MailTwoTone />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: false, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="password" prefix={<LockTwoTone />} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form>
  </>
)
