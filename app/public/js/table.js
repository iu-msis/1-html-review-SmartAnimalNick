const SomeApp = {
    data() {
      return {
      "books": {
            booktitle: {},
            authorname: {},
            pubyear: {},
            pubname: {},
            pgcount: {},
            msrp: {},
        },  
      }
    },
    computed: {

    },
    methods: {
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
    },
    created() {
        this.fetchBooksData();
    }

}

Vue.createApp(SomeApp).mount('#someApp');