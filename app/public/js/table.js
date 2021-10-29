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
        selectedBook: null,
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
                console.log("Returned from post:", json);
                this.books = json;
                this.resetBookForm();
            })
            .catch( err => {
              alert("Something went horribly wrong!");
            });
        },

        postEditBook(evt) {     
            
            console.log("Updating!", this.bookForm);

            fetch('api/books/update.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.resetBookForm();
            });
        },
        postDeleteBook(o) {
            if (!confirm("Are you sure you want to delete the book titled "+o.booktitle+"?")) {
                return;
            }
            
            fetch('api/books/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
                headers: {
                "Content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.resetBookForm();
            });
        },
        selectBook(o) {
            this.selectedBook = o;
            this.bookForm = Object.assign({}, this.selectedBook);
        },

        resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
        },
        postBook(evt) {
            if (this.selectedBook === null) {
                this.postNewBook(evt);
            } else {
                this.postEditBook(evt);
            }
          }
    },

    created() {
        this.fetchBooksData();
    }

}

Vue.createApp(SomeApp).mount('#someApp');