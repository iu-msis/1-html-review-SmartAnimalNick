const SomeApp = {
    data() {
      return {
      "books": {
            id: {},
            booktitle: {},
            authorname: {},
            pubyear: {},
            pubname: {},
            pgcount: {},
            msrp: {},
        },
        "bookForm": {}
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
        postNewBook(evt) {

            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post", json);
                this.books = json;
                this.bookForm={};
            });
        }
    },
    created() {
        this.fetchBooksData();
    }

}

Vue.createApp(SomeApp).mount('#someApp');