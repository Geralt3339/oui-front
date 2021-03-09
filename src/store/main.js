import { getSemestersQ } from '../rest/semestersController'

export const main = {
  state: {
    semesters: []
  },

  getters: {
    getSemesters: state => state.semesters
  },

  mutations: {
    setSemesters: (state, data) => { state.semesters = data }
  },

  actions: {
    semesters: ({ commit }) => {
      getSemestersQ().then(res => {
        console.log(res)
        commit('setSemesters', res.response)
      })
    }
  }
}
