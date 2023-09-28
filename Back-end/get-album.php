<?php

//* Leggo il json
$json_albums = file_get_contents('./data/dischi_json.json');

//* Lo trasformo in un array
$albums = json_decode($json_albums);

//* Avviso il browser che sto inviando un contenuto in json
header('Content-Type: application/json');

//* Lo stampo con echo --> si collega ad axios in main.js
echo json_encode($albums);
?>