<template>
   <div>
       <input v-model="login" type="text">
       <button @click="auth">ok</button>
   </div>
</template>
<script>
import Vue from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)

export default {
    data: function(){
        return{
            login: ''
        }
    },
    methods:{
        auth() {
            Vue.axios.get(`http://localhost:3000/name/${this.login}`).then(response=>{
                console.log(response.data)
                if(response.data === null || response.data.name === 'CastError'){
                    return
                }

                this.$store.commit('setUser', response.data)
                this.$router.push('/')
            })
        }
    }
}
</script>
<style scoped>
    
</style>