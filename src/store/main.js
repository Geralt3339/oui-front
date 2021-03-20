import { getSemestersQ } from '../rest/semestersController'
import { getCoursesQ } from '../rest/coursesController'
import { groupSearchQ } from '../rest/groupsController'

export const main = {
  state: {
    semesters: [],
    courses: [],
    groups: []
  },

  getters: {
    getSemesters: state => state.semesters,
    getCourses: state => state.courses,
    getGroups: state => state.groups
  },

  mutations: {
    setSemesters: (state, data) => { state.semesters = data },
    setCourses: (state, data) => { state.courses = data },
    setGroups: (state, data) => { state.groups = data }
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
    },
    groups: ({ commit }, data) => {
      console.log(data)
      groupSearchQ(data).then(res => {
        commit('setGroups', res.response)
      })
    }
  }
}
