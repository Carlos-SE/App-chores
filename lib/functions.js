// Focused on HU03 and HU02
function recommendSong(playlist, song) {
	const genresWeight = 75;
	const featWeight = 50;

	let sortedGenres = playlist.getSortedGenres();

	let likely = 0;
	let playlistLength = playlist.songs.length;
	for (let genrePair of sortedGenres) {
		let genre = genrePair[0];
		if (song.genre === genre) {
			likely += genrePair[1] / playlistLength * genresWeight;

		}

	}

	if (playlist.hasFeaturing(song.interpretes)) {
		likely += featWeight;

	}

	return likely;

}

module.exports = recommendSong