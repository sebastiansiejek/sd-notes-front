export const getUserToken = () => {
  const userToken = localStorage.getItem('userToken')
  return userToken && JSON.parse(userToken).token
}
