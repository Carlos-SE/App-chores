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

    let suggestedSong1 = new Song("Antes de que cuente diez", "Fito y Fitipaldis", "Rock");
    let suggestedSong2 = new Song("Good Vibrations - Remastered 2001", "The Beach Boys", "Pop");
    let suggestedSong3 = new Song("Limbo", "Daddy Yankee", "Reggaeton");
    let suggestedSong4 = new Song("She's Not There", "The Zombies", "Pop-Rock");

    let suggestedSongs = [suggestedSong1, suggestedSong2, suggestedSong3, suggestedSong4];

    let playlist = new Playlist(songs);

    let recommended = recommendSong(playlist, suggestedSongs);

    expect(recommended.includes(suggestedSong1)).toBe(true);
    expect(recommended.includes(suggestedSong2)).toBe(false);
    expect(recommended.includes(suggestedSong3)).toBe(false);
    expect(recommended.includes(suggestedSong4)).toBe(false);
    
})
