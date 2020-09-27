export const getUserToken = () => {
  const userToken = localStorage.getItem('userToken')
  return userToken && JSON.parse(userToken).token
}

export const excerpt = (str: string, limit: number) => {
  return str.length > limit
    ? str.substr(0, str.lastIndexOf(' ', limit)) + '...'
    : str
}
