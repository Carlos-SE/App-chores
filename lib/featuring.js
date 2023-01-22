class Featuring {
	constructor(colaboradores) {
		this.colaboradores = colaboradores;
	}

	equals(other) {
		if (other instanceof Featuring) {
			// Comparamos los arrays de colaboradores elemento por elemento
			for (let artist of this.colaboradores){
				if (!artist in other.colaboradores) return false;
			}
			return true;
		}
		return false;
	}

}

module.exports = Featuring
