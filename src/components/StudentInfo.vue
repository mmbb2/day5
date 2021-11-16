<template>
    <div>
        <ModalImage v-if="isModalOpen" :img="student.photo" :closeModal="closeModal"></ModalImage>
        Кількість студентів: {{studentsCount}}
        <div class="student-card">
            <img :src="student.photo" alt="" @click="isModalOpen = true">
            <div>
                <p>{{student.name}}, {{student.group}}</p>
                <p>ПР <input type="checkbox" v-model="student.isDonePr"></p>
                <p>Оцінка: {{student.mark}}</p>
            </div>
        </div>
         <router-link :to="'/'">
            <div class="back-button">
                <p>На головну</p>
            </div>
         </router-link>
    </div>
</template>
<script>
import ModalImage from './ModalImage.vue'
import Vue from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)

export default {
    props: {
        id: ''
    },
    data: function(){
        return{
            student: {},
            isModalOpen: false
        }
    },
    components:{
        ModalImage
    },
    mounted: function(){
        Vue.axios.get(`http://46.101.212.195:3000/students/${this.id}`).then(response=>{
            console.log(response.data)
            this.student = response.data
        })
    },
    methods:{
        closeModal: function(){
            this.isModalOpen = false
        }
    },
    computed:{
            studentsCount () {
                return this.$store.getters.getCount
            }
        }
}
</script>
<style scoped>
.student-card{
    width: fit-content;
    height: 400px;
    margin: auto;
    border: 1px solid lightblue ;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.back-button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    border: 1px solid lightblue ;
    border-radius: 10px;
}
</style>