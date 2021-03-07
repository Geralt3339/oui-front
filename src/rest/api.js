export const Api = async (url, options = {}) => {
  const request = await fetch(`https://oui-backend.herokuapp.com/${url}`, options)
  return request
}
