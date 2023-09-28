//* Instanza Vue JS

const { createApp } = Vue;
createApp({
  data() {
    return {
      albums: [],
      selectedAlbum: "",
    };
  },
  methods: {
    getCardInfo(index) {
      this.albums[index];
      console.log(JSON.parse(JSON.stringify(this.albums[index])));
      /* console.log(this.albums[index]); */
    },
  },
  /*mounted di axios */
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

/* al click sull'album, stampo in console i dati 
contenuti nel suo indice.. come procedo?
clicco sull immagine e scateno la funzione(metodo)
cosa deve fare la funzione? in base all indice cliccato, mi mostra il suo contenuto..
albums[index]


*/
