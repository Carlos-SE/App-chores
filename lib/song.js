class Song {
	constructor(titulo, interpretes, archivo) {
		this.titulo      = titulo;
		this.interpretes = interpretes;
		this.archivo     = archivo;
	}


	/**
	* @return: Json que contiene los atributos
 	*/
	getJson() {
		var song = {
			titulo:			this.titulo,
			interpretes:	this.interpretes,
			archivo:		this.archivo,
		}

		return song;
	}
}

module.exports = Song 

