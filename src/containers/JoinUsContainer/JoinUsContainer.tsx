import JoinUs from 'organisms/JoinUs'
import React from 'react'
import request from 'utils/Request'
import { notification } from 'antd'

export default () => {
  return (
    <div>
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
      />
    </div>
  )
}
