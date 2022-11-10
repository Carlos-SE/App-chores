class Song {
	constructor(titulo, interpretes, disco, genero, duracion, archivo) {
		this.titulo			= titulo;
		this.interpretes	= this.interpretes;
		this.genero			= genero; 
		this.disco			= disco;
		this.duracion		= duracion;
		this.archivo		= archivo;
	}

	
	/**
	* @return: Título de la canción
 	*/
	getTitulo() {
		return this.titulo;
	}
	
	/**
	* @return: Artista o artistas de la canción
 	*/
	getArtista() {
		return this.artista;
	}

	/**
	* @return: Género de la canción
 	*/
	getGenero() {
		return this.genero;
	}

	/**
	* @return: Disco al que pertenece la canción
 	*/
	getDisco() {
		return this.disco
	}

	/**
	* @return: Duración de la canción
 	*/
	getDuracion() {
		return this.duracion;
	}

	/**
	* @return: Archivo de la canción
 	*/
	getArchivo() {
		return this.archivo;
	}


	/**
	* @return: Json que contiene los atributos
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
}

module.exports = Song 

