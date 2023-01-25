const Song = require('../lib/song')
const Playlist = require('../lib/playlist')
const recommendSong = require('../lib/functions')


test('Create a playlist and two separe songs to see if they are a good recommendation', () => {
	let songs = [];
    let song1 = new Song("Feo Fuerte y Formal", "Loquillo Y Los Trogloditas", "Rock");
    let song2 = new Song("Venezia", "Hombres G", "Pop-Rock");
    let collab3 = ["Loquillo Y Los Trogloditas", "Fito y Fitipaldis"];
    let song3 = new Song("Luché contra la ley", collab3, "Rock");

    songs.push(song1, song2, song3);

    let suggestedSong = new Song("Antes de que cuente diez", "Fito y Fitipaldis", "Rock");

    let playlist = new Playlist(songs);
    
    let likely = recommendSong(playlist, suggestedSong);

    // Es una buena sugerencia
    expect(likely).toBe(true);
    
    suggestedSong = new Song("Limbo", "Daddy Yankee", "Reggaeton");
    likely = recommendSong(playlist, suggestedSong);

    // Es una mala sugerencia
    expect(likely).toBe(false);
})
