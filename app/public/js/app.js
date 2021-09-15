const app = Vue.createApp({
    data() {
        return {
            picture: 'https://randomuser.me/api/portraits/men/75.jpg',
            firstName: 'John',
            lastName: 'Doe',
            country: 'United States',
            dateDob: '2000-04-28T20:07:37.751Z',
            ageDob: 21,
            email: 'john@gmail.com',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.picture = results[0].picture.large
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.country = results[0].location.country
            this.dateDob = results[0].dob.date
            this.ageDob = results[0].dob.age
            this.email = results[0].email
        },
    },
})

app.mount('#app')