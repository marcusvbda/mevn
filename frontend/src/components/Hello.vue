<template>
    <div id="hello">
        <h1>{{ msg }}</h1>
        <el-alert title="success alert" type="success" effect="dark"></el-alert>
        <ul>
            <li>
                <a href="#" @click.prevent="$router.push({ path: 'teste' })">Teste</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: undefined
        }
    },
    beforeRouteEnter(to, from, next) {
        $api.get("/auth/get-data").then(res => {
            next(_this => {
                _this.msg = res.data.msg
            })
        }).catch(er => {
            console.log(er)
        })
    }
}
</script>

<style scoped>
#hello {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
