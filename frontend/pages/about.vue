<template>
    <div>
        <h1>{{page}}</h1>
        <p>
            <small>{{msg}}</small>
        </p>
        <nuxt-link to="/" class="example-red">Home</nuxt-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            page: "About",
            meta: [
                { hid: 'description', name: 'description', content: 'About page description' }
            ]
        }
    },
    async asyncData({ $axios }) {
        // $axios.setToken('123', 'Bearer')
        let resp = await $axios.get("auth/get-data")
        return { msg: resp.data.msg }
    },
    head() {
        return {
            title: "About",
            meta: [
                { hid: 'description', name: 'description', content: 'My custom description' }
            ]
        }
    }
}
</script>