const Song = require('../lib/song')
const Featuring = require('../lib/featuring')
const Playlist = require('../lib/playlist')

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

test('Create a playlist and two separe songs to see if they are a good recommendation', () => {
	let songs = [];
    let song1 = new Song("Feo Fuerte y Formal", "Loquillo Y Los Trogloditas", "Rock");
    let song2 = new Song("Venezia", "Hombres G", "Pop-Rock");
    let collab3 = new Featuring(["Loquillo Y Los Trogloditas", "Fito y Fitipaldis"]);
    let song3 = new Song("Luché contra la ley", collab3, "Rock");

    songs.push(song1, song2, song3);

    let suggestedSong = new Song("Antes de que cuente diez", "Fito y Fitipaldis", "Rock");

    let playlist = new Playlist("Fav songs", songs);
    
    let likely = recommendSong(playlist, suggestedSong);

    // Es una buena sugerencia
    expect(likely >= 50).toBe(true);
    
    suggestedSong = new Song("Limbo", "Daddy Yankee", "Reggaeton");
    likely = recommendSong(playlist, suggestedSong);

    // Es una mala sugerencia
    expect(likely < 50).toBe(true);
})
