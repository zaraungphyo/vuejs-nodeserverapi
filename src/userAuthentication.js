import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { APIService } from './api-service'

const apiService = new APIService()
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        //   console.log(user)
        apiService.login(user).then(
          resp => {
            //  console.log(resp)
            const token = resp.token
            const user = resp.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            localStorage.setItem('user', JSON.stringify(user))
            commit('auth_success', token, user)
            resolve(resp)
            // this.showError = true
          },
          err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
            // this.showError = true
          }
        )
      })
    },
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        apiService.createUser(user).then(
          resp => {
            const token = resp.token
            const user = resp.user
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          },
          err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          }
        )
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
    //  user: state => state.user
  }
})
