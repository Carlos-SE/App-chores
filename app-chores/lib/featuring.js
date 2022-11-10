class Featuring {
	constructor(principal, colaboradores, cancion) {
		this.principal 		= principal;
		this.colaboradores	= colaboradores;
		this.cancion		= cancion;
	}
	

	/**
	* @return: Artista principal de la colaboración
 	*/
	getPrincipal() {
		return this.principal;
	}

	/**
	* @return: Artista/s colaboradores de principal en la canción
 	*/
	getColaboradores() {
		return this.colaboradores;
	}

	/**
	* @return: Canción de la colaboración
 	*/
	getCancion() {
		return this.cancion;
	}

}

module.exports = Featuring
