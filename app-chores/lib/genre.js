class Genre {
	constructor(genero, canciones) {
		this.genero		= genero;
		this.canciones	= canciones;
	}


	/**
	* @return: String con el género
 	*/
	getGenero() {
		return this.genero;
	}

	/**
	* @return: Listas de canciones asociadas al género
 	*/
	getCanciones() {
		return this.canciones;
	}
}

module.exports = Genre;
