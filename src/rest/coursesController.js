import { Api } from './api'

export const getCoursesQ = (data) => {
  const response = Api(`/courses?query=${data}`).then(res => JSON.stringify(res))
  return response
}
