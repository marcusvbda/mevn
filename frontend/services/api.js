import axios from 'axios'
process.env = require('../config')
const api = axios.create({
    baseURL: process.env.SERVER_ROUTE
})
window.$api = api

// api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null

