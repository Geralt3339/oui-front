import { Api } from './api'

export const getCoursesQ = (data) => {
  const response = Api(`/courses?query=${data}`).then(res => res.json())
  return response
}
