class Song {
	constructor(titulo, interpretes, disco, genero, duracion, archivo) {
		this.titulo			= titulo;
		this.interpretes	= this.interpretes;
	}


	/**
	* @return: Json que contiene los atributos
 	*/
	getJson() {
		var song = {
			titulo:			this.titulo,
			interpretes:	this.interpretes,
			disco:			this.disco,
			categoria:		this.categoria,
			duracion:		this.duracion,
			archivo:		this.archivo,
		}

		return song;
	}
}

module.exports = Song 

