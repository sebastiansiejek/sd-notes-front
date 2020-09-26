import React from 'react'
import { PlusCircleTwoTone } from '@ant-design/icons'

type IProps = {
  onClick?: Function
}

export default ({ onClick }: IProps) => (
  <PlusCircleTwoTone
    style={{
      fontSize: '50px',
      position: 'fixed',
      right: '20px',
      bottom: '20px'
    }}
    onClick={() => onClick}
  />
)
