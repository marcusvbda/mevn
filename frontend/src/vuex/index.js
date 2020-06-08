import Vue from "vue"
import Vuex from "vuex"
import User from "./stores/user"

Vue.use(Vuex)

export default new Vuex.Store({
    ...User
})