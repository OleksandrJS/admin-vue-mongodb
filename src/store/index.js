/** @format */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, _id, email, isAdmin) {
      state.status = 'success';
      state.token = token;
      state.user._id = _id;
      state.user.email = email;
      state.user.isAdmin = isAdmin;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    async login({ commit }, email, password) {
      try {
        commit('auth_request');
        const { data } = await axios.post('http://localhost:5000/api/login', {
          email,
          password,
        });
        const { token, _id, email: mail, isAdmin } = data;

        localStorage.setItem('token', token);
        // Add the following line:
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, _id, mail, isAdmin);
      } catch (e) {
        commit('auth_error');
        localStorage.removeItem('token');
      }
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({
          url: 'http://localhost:5000/api/register',
          data: user,
          method: 'POST',
        })
          .then((resp) => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem('token', token);
            // Add the following line:
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        resolve();
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
});
