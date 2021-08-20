const app = Vue.createApp({
    data() {
        return{
            firstName : 'Muhammad',
            lastName : 'Habil',
            phone : '081263288615',
            email : 'habilmuhammad@hotmail.com',
            gender : 'male'

        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            // console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.phone = results[0].phone
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        },
    }
})

app.mount('#app')