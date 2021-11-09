import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
 
new Vue(
    {
        el: "#app",
        data: {
            students: [],
            query: '',
            studentForm: {
                name: '',
                group: '',
                mark: null,
                isDonePr: false,
            },
            inputValue: null,
            from: null,
            to: null,
            rates: []
        },
        mounted: function(){
            axios.get("http://46.101.212.195:3000/students").then(response => {
                
                this.students = [...response.data];
            })

            axios.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json").then(response => {
                
                this.rates = [...response.data];
                this.rates.push({
                    txt: "Українська гривня",
                    rate: 1,
                    cc: "UAH"
                })
                console.log(this.rates)
            })
        },
        methods: {
            deleteStudent: function(id){

                let newStudents = []
                
                this.students.forEach(student => {
                    if(student._id != id){
                        newStudents.push(student)
                    }
                });
                
                this.students = newStudents;
            },
            addStudent: function(){
                if(Object.values(this.studentForm).every(value => value === false ? true : value)){
                    this.students.push({
                        id: Date.now(),
                        name: this.studentForm.name,
                        group: this.studentForm.group,
                        mark: this.studentForm.mark,
                        isDonePr: this.studentForm.isDonePr
                    })
                } else{
                    alert('Введіть всі данні')
                }
                
            }
        },
        computed: {
            outputValue: function(){
                return this.inputValue * this.from.rate / this.to.rate
            }
        }
    }
);