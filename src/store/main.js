import { getSemestersQ } from '../rest/semestersController'
import { getCoursesQ } from '../rest/coursesController'

export const main = {
  state: {
    semesters: [],
    courses: []
  },

  getters: {
    getSemesters: state => state.semesters,
    getCourses: state => state.courses
  },

  mutations: {
    setSemesters: (state, data) => { state.semesters = data },
    setCourses: (state, data) => { state.courses = data }
  },

  actions: {
    semesters: ({ commit }) => {
      getSemestersQ().then(res => {
        console.log(res)
        commit('setSemesters', res.response)
      })
    },
    courses: ({ commit }, data) => {
      getCoursesQ(data).then(res => {
        console.log(res)
        commit('setCourses', res.response)
      })
    }
  }
}
