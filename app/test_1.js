
const Song	= require('./lib/song.js')

const song	= new Song('Ace of Spades', ['Motorhead'], 'Ace of Spades (Expanded Edition)', 
						'Speed metal', '2:46 min', 'ace_of_spades.mp3');


// Tests:

console.log(song.getJson());
console.log(('Titulo: '+song.getTitulo() + ', Artista:'+song.getArtista() 
				+ ', Disco:'+song.getDisco() + ', Categoria:' + song.getCategoria() 
				+ ', Duracion:' + song.getDuracion() + ', Nombre del archivo:' + song.getArchivo()));
