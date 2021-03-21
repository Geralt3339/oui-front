export const Api = async (url, options = {}) => {
  options.headers = {
    'Content-Type': 'application/json'
  }
  const request = await fetch(`https://oui-backend.herokuapp.com/${url}`, options)
  return request
}
