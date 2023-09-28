//* Instanza Vue JS

const { createApp } = Vue;
createApp({
  data() {
    return {
      albums: [],
    };
  },

  /* methods: {
    greetings: function () {
        return 'ciao';
    }
  } */
  mounted() {
    axios
      .get(
        "http://localhost/3-esercizio-php-vue-disc/php-dischi-json/Back-end/get-album.php"
      )
      .then((response) => {
        //! In seguito alla stampa su get-album.php con response.data dico ad album di riempirsi..
        //! e con vueJS stampo dinamicamente i contenuti degli album!
        this.albums = response.data;
      });
  },
}).mount("#app");
