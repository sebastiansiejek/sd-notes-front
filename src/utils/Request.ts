import { baseUrlApi } from 'configs/api'
import axios from 'axios'

type IMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

export default async (
  method: IMethod = 'GET',
  url: string,
  body: object = {},
  authData: any = undefined,
  baseUrl: string = baseUrlApi
) =>
  axios({
    method,
    url: `${baseUrl}${url}`,
    headers: {
      Authorization: authData ? authData : undefined,
      'Content-Type': 'application/json'
    },
    data: body
  })
