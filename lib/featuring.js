class Featuring {
	constructor(colaboradores) {
		this.colaboradores = colaboradores;
	}

	equals(other) {
		if (other instanceof Featuring) {
			// Comparamos los arrays de colaboradores elemento por elemento
			if (this.colaboradores.length !== other.colaboradores.length) return false;
			for (let i = 0; i < this.colaboradores.length; i++) {
				if (this.colaboradores[i] !== other.colaboradores[i]) return false;
			}
			return true;
		}
		return false;
	}

}

module.exports = Featuring
