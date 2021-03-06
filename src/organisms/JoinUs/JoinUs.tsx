import Login from 'molecules/Login'
import React, { useState } from 'react'
import Register from 'molecules/Register'
import styled from 'styled-components'
import { Card, Radio } from 'antd'

const Container = styled.div`
  max-width: 70vw;
  margin: auto;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`

type IProps = {
  registerHandler: Function
  loginHandler: Function
}

export default ({ registerHandler, loginHandler }: IProps) => {
  const [isVisible, setVisible] = useState('login')

  const handleVisible = (e: any) => {
    setVisible(e.target.value)
  }

  return (
    <Container>
      <Card
        title={
          <ButtonsContainer>
            <Radio.Group defaultValue="login">
              <Radio.Button value="login">Sign in</Radio.Button>
              <Radio.Button value="register">Register</Radio.Button>
            </Radio.Group>
          </ButtonsContainer>
        }
      >
        {isVisible === 'login' && <Login onSubmit={loginHandler} />}
        {isVisible === 'register' && <Register onSubmit={registerHandler} />}
      </Card>
    </Container>
  )
}
