import { Api } from './api'

export const groupSearchQ = (data) => {
  const response = new Api(`groups/search`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
  return response
}
