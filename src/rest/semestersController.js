import { Api } from './api'

export const getSemestersQ = () => {
  const response = Api('/semesters').then(res => res.json())
  return response
}
