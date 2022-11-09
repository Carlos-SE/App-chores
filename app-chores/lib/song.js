
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
	* @return: Disco al que pertenece la canción
 	*/
	getDisco() {
		return this.disco
	}

	/**
	* @return: Categoría a la que pertenece la canción
 	*/
	getCategoria() {
		return this.categoria;
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
