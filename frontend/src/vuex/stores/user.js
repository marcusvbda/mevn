export default {
    state: {
        user: {
            nome: undefined,
            id: undefined
        }
    },
    getters: {
        getUser: s => s.user,
    },
    mutations: {
        setUser: (state, value) => state.user = { ...state.user, ...value }
    }

}