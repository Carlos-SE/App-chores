
const Song	= require('./lib/song.js')

const song_1	= new Song('Ace of Spades', ['Motorhead'], 'Ace of Spades (Expanded Edition)', 
						'Speed metal', '2:46 min', 'ace_of_spades.mp3');

const song_2	= new Song('Life is good (ft. Drake)', ['Future', 'Drake'], 'Life is good(ft. Drake)', 
						'Trap', '3:57 min', 'life_is_good.mp3');



// Tests:

console.log(song_1.getJson());
console.log(('Titulo: '+song_1.getTitulo() + ', Artista:'+song_1.getArtista() 
				+ ', Disco:'+song_1.getDisco() + ', Categoria:' + song_1.getCategoria() 
				+ ', Duracion:' + song_1.getDuracion() + ', Nombre del archivo:' + song_1.getArchivo()));


console.log(song_2.getJson());
console.log(('Titulo: '+song_2.getTitulo() + ', Artista:'+song_2.getArtista() 
				+ ', Disco:'+song_2.getDisco() + ', Categoria:' + song_2.getCategoria() 
				+ ', Duracion:' + song_2.getDuracion() + ', Nombre del archivo:' + song_2.getArchivo()));
