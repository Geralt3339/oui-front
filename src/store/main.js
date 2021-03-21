import $router from '../router'

import { getSemestersQ } from '../rest/semestersController'
import { getCoursesQ } from '../rest/coursesController'
import { groupSearchQ, groupAddQ } from '../rest/groupsController'

import { showToast } from '../plugins/toast'

export const main = {
  state: {
    semesters: [],
    courses: [],
    groups: [],
    loaders: {
      addGroupLoader: {
        loader: false,
        fulfield: false
      }
    }
  },

  getters: {
    getSemesters: state => state.semesters,
    getCourses: state => state.courses,
    getGroups: state => state.groups,
    getAddGroupLoader: state => state.loaders.addGroupLoader
  },

  mutations: {
    setSemesters: (state, data) => { state.semesters = data },
    setCourses: (state, data) => { state.courses = data },
    setGroups: (state, data) => { state.groups = data },
    setAddGroupLoader: (state, data) => { state.loaders.addGroupLoader = data }
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
        console.log(res)
        commit('setGroups', res.response)
      })
    },
    addGroup: ({ commit }, data) => {
      commit('setAddGroupLoader', {
        loader: true,
        fulfield: false
      })
      groupAddQ(data).then(res => {
        if (res.error) {
          console.log('addGroupQ error', res.error)
          showToast({
            message: 'Sorry something went wrong',
            type: 'error',
            position: 'top-right',
            duration: 3000
          })
          return false
        } else {
          console.log('addGroupQ response', res)
          showToast({
            message: 'Group successfully added',
            type: 'success',
            position: 'top-right',
            duration: 3000
          })
          $router.push('/')
          return true
        }
      }).finally((status) => {
        commit('setAddGroupLoader', {
          loader: false,
          fulfield: status
        })
      })
    }
  }
}
