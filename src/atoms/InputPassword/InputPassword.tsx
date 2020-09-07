import React, { useState } from 'react'
import { Input } from 'antd'
import { LockTwoTone, EyeInvisibleTwoTone, EyeTwoTone } from '@ant-design/icons'

export default () => {
  const [isVisible, toggleVisible] = useState(false)

  return (
    <Input
      placeholder='password'
      type={isVisible ? 'text' : 'password'}
      prefix={<LockTwoTone />}
      suffix={
        isVisible ? <EyeTwoTone onClick={() => toggleVisible(!isVisible)} /> : <EyeInvisibleTwoTone onClick={() => toggleVisible(!isVisible)} />
      }
    />
  )
}
