import axios from 'axios'
const API_URL = 'http://localhost:4000'

export class APIService {
  // eslint-disable-next-line no-useless-constructor
  constructor () {}

  login (user) {
    const url = `${API_URL}/api/user/login`
    return axios.post(url, user).then(response => response.data)
  }
  createUser (user) {
    const url = `${API_URL}/api/user/createuser`
    return axios.post(url, user).then(response => response.data)
  }
  addProduct (data) {
    const url = `${API_URL}/api/product/addproduct`
    return axios.post(url, data)
  }
  getProducts () {
    const url = `${API_URL}/api/product/getproducts`
    return axios.get(url).then(response => response.data)
  }
}
