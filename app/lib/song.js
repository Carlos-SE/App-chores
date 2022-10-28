class Song {
	constructor(titulo, artista, disco='undefined', categoria='undefined', duracion='undefined', archivo) {
		this.titulo		= titulo;
		this.artista	= artista;
		this.disco		= disco;
		this.categoria	= categoria; 
		this.duracion	= duracion;
		this.archivo	= archivo;
	}


	getTitulo() {
		return this.titulo;
	}
	
	getArtista() {
		return this.artista;
	}

	getDisco() {
		return this.disco
	}

	getCategoria() {
		return this.categoria;
	}
	
	getDuracion() {
		return this.duracion;
	}

	getNombre() {
		return this.nombre;
	}


	/**
	* Devuelve un json que contiene los atributos
 	*/
	getJson() {
		var song = {
			titulo:		this.titulo,
			artista:	this.artista,
			disco:		this.disco,
			categoria:	this.categoria,
			duracion:	this.duracion,
			archivo:	this.archivo,
		}

		return song;
	}

	/**
	* Inserta una cancion en la base de datos de canciones
	* @param:	Base de datos en la que se va a hacer la inserción
	* @return:	Copia del elemento insertado
 	*/
	insertInDb(db) {
		return null;
	}

	/**
	* Comprueba si una canción está en la base de datos de canciones
	* @param:	Base de datos en la que se quiere saber si está la canción
	* @return:	True si está, false si no
 	*/
	getFromDb(db) {
		return null;
	}
}

module.exports = Song 
