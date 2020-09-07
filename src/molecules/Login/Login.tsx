import React from 'react'
import InputPassword from 'atoms/InputPassword'
import { Form, Input, Button } from 'antd'
import { MailTwoTone } from '@ant-design/icons'

export default () => (
  <>
    <Form>
      <Form.Item name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input placeholder='email' type='email' prefix={<MailTwoTone />} />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
        <InputPassword />
      </Form.Item>
      <Button type='primary' htmlType='submit'>
        Sign in
      </Button>
    </Form>
  </>
)
