const SomeApp = {
    data() {
      return {
        result: {},
        list: [5,6,7,8],
        message: "Waiting ...",
      }
    },

    computed: {
      prettyBirthday() {
        return dayjs(this.result.dob.date)
        .format('D MMM YYYY')
      }
    },

    methods: {
      fetchUserData() {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((json) => {
            console.log("Got json back:", json);
            this.result = json.results[0];
        })
        .catch( (error) => {
            console.error(error);
        });
      }
    },

    created() {
      this.fetchUserData();
    }
  }
  
  Vue.createApp(SomeApp).mount('#someApp');