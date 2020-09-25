import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import { Menu, Layout } from 'antd'
import { isLogin, logout } from 'store/user'
import { useDispatch } from 'react-redux'

const { Sider } = Layout

export default () => {
  const dispatch = useDispatch()

  return (
    <Sider>
      <Menu
        theme="dark"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        {isLogin() && (
          <Menu.Item
            onClick={() => dispatch(logout())}
            icon={<LogoutOutlined />}
            key="logout"
            style={{
              marginTop: 'auto'
            }}
          >
            Logout
          </Menu.Item>
        )}
      </Menu>
    </Sider>
  )
}
