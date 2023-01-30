const Playlist = require('./playlist')

// Focused on HU03 and HU02
function valueSong(playlist, song) {
	const genresWeight = 50;
	const featWeight = 50;

	const sortedGenres = playlist.getSortedGenres();

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

function recommendSong(playlist, songs, denominator = 3){
	const min_likely = 50;

	// Don't allow negative or 0 values
	if (denominator < 0) {denominator *= -1}
	else if (denominator == 0) {denominator = 1}

	const appendSize = Math.floor(playlist.songs.length/denominator);
	let appended = 0;
	let recommended = new Map();

	for (let song of songs){
		let value = valueSong(playlist, song);
		if (value >= min_likely && !playlist.songs.includes(song)){
			recommended.set(song, value);
		}
	}

	recommended = new Map(Array.from(recommended.entries()).sort((a, b) => b[1] - a[1]));

	for (let song of recommended.keys()){
		playlist.addSong(song);
		
		appended++;

		if (appended > appendSize){
			break;
		}
	}

}

module.exports = recommendSong