import React from 'react'
import { Form, Input, Button } from 'antd'
import { MailTwoTone, LockTwoTone } from '@ant-design/icons'

export default ({ onSubmit }: any) => (
  <>
    <Form onFinish={onSubmit}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="email" type="email" prefix={<MailTwoTone />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="password" prefix={<LockTwoTone />} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Sign in
      </Button>
    </Form>
  </>
)
