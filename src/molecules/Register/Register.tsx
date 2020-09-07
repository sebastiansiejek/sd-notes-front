import React from 'react'
import InputPassword from 'atoms/InputPassword'
import { Form, Input, Button } from 'antd'
import { SmileTwoTone, MailTwoTone } from '@ant-design/icons'

export default () => (
  <>
    <Form>
      <Form.Item name='name' rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input placeholder='name' prefix={<SmileTwoTone />} />
      </Form.Item>
      <Form.Item name='email' rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input placeholder='email' type='email' prefix={<MailTwoTone />} />
      </Form.Item>
      <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
        <InputPassword />
      </Form.Item>
      <Button type='primary' htmlType='submit'>
        Register
      </Button>
    </Form>
  </>
)
