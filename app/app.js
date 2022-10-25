const Song = require('./controllers/songController.js')

var http = require('http');

const song = new Song('Ace of Spades', ['Motorhead'], 'Ace of Spades (Expanded Edition)', 'Speed metal', '2:46 min', 'ace_of_spades.mp3');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Titulo: '+song.getTitulo() + ', Artista:'+song.getArtista() + ', Disco:'+song.getDisco() + ', Categoria:' 
		  + song.getCategoria() + ', Duracion:' + song.getDuracion() + ', Nombre del archivo:' + song.getNombre());

}).listen(8080); 
