const namespaced = true

const state = {
  name: ''
}

const getters = {
  getName: state => state.name
}

const mutations = {
  login (state, payload) {
    state.name = payload.name
  }
}

export default{
  namespaced,
  state,
  getters,
  mutations
}
