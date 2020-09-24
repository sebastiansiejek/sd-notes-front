import JoinUsContainer from 'containers/JoinUsContainer'
import { ComponentType } from 'react'

type IRoutes = Array<{ path: string; component: ComponentType }>

export const routes: IRoutes = [
  {
    path: '/join-us',
    component: JoinUsContainer
  }
]
