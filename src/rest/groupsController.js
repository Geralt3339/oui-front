import { Api } from './api'

export const groupSearchQ = (data) => {
  const response = new Api('groups/search', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(res => res.json())
  return response
}

export const groupAddQ = (data) => {
  const response = new Api('groups/add', {
    method: 'post',
    body: JSON.stringify(data)
  }).then(res => res.json())
  return response
}
