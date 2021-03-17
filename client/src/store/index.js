import Vue from 'vue'
import Vuex from 'vuex'

import { apolloClient } from '../main'
import { GET_ELEMENTS, ADD_CONFIG, ADD_ELEMENT } from '../queries'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    element: {},
    items: [],
    jsonConfig: null,
    loading: false
  },
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setConfig: (state, payload) => {
      state.jsonConfig = payload
    },
    setElement: (state, payload) => {
      state.element = {}
      payload.forEach(item => {
        state.element[item.selector] = item
        state.items.push(item)
      })
    }
  },

  actions: {
    getElements: ({ commit }, payload) => {
      commit('setLoading', true)
      apolloClient
        .query({
          query: GET_ELEMENTS,
          variables: payload
        })
        .then(({ data }) => {
          commit('setElement', data.getElements)
          commit('setLoading', false)
        })
        .catch(err => {
          commit('setLoading', false)
          console.error(err)
        })
    },
    addConfig: ({ commit }, payload) => {
      commit('setLoading', true)

      apolloClient
        .mutate({
          mutation: ADD_CONFIG,
          variables: payload
        })
        .then(({ data }) => {
          commit('setLoading', false)
          commit('setConfig', data.addConfig)
        })
        .catch(err => {
          commit('setLoading', false)
          console.error(err)
        })
    },

    addElement: ({ commit }, payload) => {
      commit('setLoading', true)

      apolloClient
        .mutate({
          mutation: ADD_ELEMENT,
          variables: payload
        })
        .then(({ data }) => {
          commit('setLoading', false)
          commit('setConfig', data.addElement)
        })
        .catch(err => {
          commit('setLoading', false)
          console.error(err)
        })
    }
  },

  getters: {
    element: state => state.element,
    items: state => state.items,
    loading: state => state.loading
  }
})
