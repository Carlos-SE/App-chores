class Song {
	constructor(titulo, artista, disco='none', categoria='none', duracion='none', nombre) {
		this.titulo		= titulo;
		this.artista	= artista;
		this.disco		= disco;
		this.categoria 	= categoria; 
		this.duracion	= duracion;
		this.nombre 	= nombre;
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
}

module.exports = Song 
