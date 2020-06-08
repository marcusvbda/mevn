import axios from 'axios'
import config from '../config'

const api = axios.create({
    baseURL: config.server_route
})

export default api
