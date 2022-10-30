class Song {
	constructor(titulo, artista, disco, categoria, duracion, archivo) {
		this.titulo		= titulo;
		this.artista	= artista;
		this.disco		= disco;
		this.categoria	= categoria;
		this.duracion	= duracion;
		this.archivo	= archivo;
	}
	

	/**
	* @return: Devuelve el título de la canción
 	*/
	getTitulo() {
		return this.titulo;
	}

	/**
	* @return: Devuelve el artista de la canción
 	*/
	getArtista() {
		return this.artista;
	}

	/**
	* @return: Devuelve el disco donde está la canción
 	*/
	getDisco() {
		return this.disco;
	}

	/**
	* @return: Devuelve la categoría de la canción
 	*/
	getCategoria() {
		return this.categoria;
	}
	
	/**
	* @return: Devuelve la duración de la canción
 	*/
	getDuracion() {
		return this.duracion;
	}

	/**
	* @return: Devuelve el archivo de la canción
 	*/
	getArchivo() {
		return this.archivo;
	}

	/**
	* @return: Json de una canción
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
