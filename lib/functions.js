// Focused on HU03 and HU02
function recommendSong(playlist, song) {
	const genresWeight = 50;
	const featWeight = 50;
	const minPercentageGenre = 0.25;

	let sortedGenres = playlist.getSortedGenres();

	let likely = 0;
	let playlistLength = playlist.songs.length;

	for (let genre in sortedGenres){
		if (song.genre === genre && sortedGenres[genre]/playlist >= minPercentageGenre){
			likely += genresWeight;
		}
	}

	if (playlist.hasFeaturing(song.interpretes)) {
		likely += featWeight;

	}

	return likely >= 50;

}

module.exports = recommendSong