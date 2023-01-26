const Playlist = require('./playlist')

// Focused on HU03 and HU02
function valueSong(playlist, song) {
	const genresWeight = 50;
	const featWeight = 50;

	let sortedGenres = playlist.getSortedGenres();

	let likely = 0;
	const playlistLength = playlist.songs.length;

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

function recommendSong(playlist, songs){
	recommended = [];

	for (let song of songs){
		if (valueSong(playlist, song) >= 50){
			recommended.push(song);
		}
	}

	return recommended;
}

module.exports = recommendSong