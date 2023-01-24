// Focused on HU03 and HU02
function recommendSong(playlist, song) {
	const genresWeight = 75;
	const featWeight = 50;

	let sortedGenres = playlist.getSortedGenres();

	let likely = 0;
	let playlistLength = playlist.songs.length;

	for (let genre in sortedGenres){
		if (song.genre === genre){
			likely += sortedGenres[genre]/playlistLength * genresWeight;
		}
	}

	if (playlist.hasFeaturing(song.interpretes)) {
		likely += featWeight;

	}

	return likely;

}

module.exports = recommendSong