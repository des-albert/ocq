import Vue from 'vue';
import Vuex from 'vuex';

import { apolloClient } from '../main';
import { GET_ELEMENTS, ADD_CONFIG } from '../queries';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    element: {},
    jsonConfig: null,
    loading: false
  },
  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    setConfig: (state, payload) => {
      state.jsonConfig = payload;
    },
    setElement: (state, payload) => {
      state.element = {};
      payload.forEach(item => {
        state.element[item.selector] = item;
      });
    }
  },

  actions: {
    getElements: ({ commit }, payload) => {
      commit('setLoading', true);
      apolloClient
        .query({
          query: GET_ELEMENTS,
          variables: payload
        })
        .then(({ data }) => {
          commit('setElement', data.getElements);
          commit('setLoading', false);
        })
        .catch(err => {
          commit('setLoading', false);
          console.error(err);
        });
    },
    addConfig: ({ commit }, payload) => {
      commit('setLoading', true);

      apolloClient
        .mutate({
          mutation: ADD_CONFIG,
          variables: payload
        })
        .then(({ data }) => {
          commit('setLoading', false);
          commit('setConfig', data.addConfig);
        })
        .catch(err => {
          commit('setLoading', false);
          console.error(err);
        });
    }
  },
  getters: {
    element: state => state.element,
    loading: state => state.loading
  }
});
