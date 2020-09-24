import JoinUs from 'organisms/JoinUs'
import React from 'react'
import request from 'utils/Request'
import { notification } from 'antd'
import { login } from 'store/user'
import { useDispatch } from 'react-redux'

export default () => {
  const dispatch = useDispatch()

  return (
    <JoinUs
      registerHandler={(e: any) => {
        request('POST', 'register', {
          name: e.name,
          email: e.email,
          password: e.password,
          c_password: e.password
        })
          .then(({ data }) => {
            notification['success']({
              message: data.message
            })
          })
          .catch(({ response }) => {
            const { data } = response
            notification['error']({
              message: data.message,
              description: data.data
            })
          })
      }}
      loginHandler={(e: any) => {
        request('POST', 'login', {
          email: e.email,
          password: e.password
        })
          .then(({ data }) => {
            dispatch(login(data.data.token))
            notification['success']({
              message: data.message
            })
          })
          .catch(({ response }) => {
            const { data } = response
            notification['error']({
              message: data.message
            })
          })
      }}
    />
  )
}
