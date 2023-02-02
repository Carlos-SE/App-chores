const expect = require('chai').expect;
const Song = require('../lib/song')
const Playlist = require('../lib/playlist')
const recommendSong = require('../lib/functions')

describe('Crear una playlist con canciones de todo el conjunto que haya almacenadas y comprobar si se añaden las que son una buena recomendación', () => {
  it('should add the recommended songs to the playlist and not the other songs', () => {
    let songs = [];
    let song1 = new Song("Feo Fuerte y Formal", "Loquillo Y Los Trogloditas", "Rock");
    let song2 = new Song("Venezia", "Hombres G", "Pop-Rock");
    let collab3 = ["Loquillo Y Los Trogloditas", "Fito y Fitipaldis"];
    let song3 = new Song("Luché contra la ley", collab3, "Rock");
    let song4 = new Song("Antes de que cuente diez", "Fito y Fitipaldis", "Rock");
    let song5 = new Song("Good Vibrations - Remastered 2001", "The Beach Boys", "Pop");
    let song6 = new Song("Limbo", "Daddy Yankee", "Reggaeton");
    let song7 = new Song("She's Not There", "The Zombies", "Pop-Rock");
    let song8 = new Song("Esto no es Hawai(Qué wai)", "Loquillo Y Los Trogloditas", "Rock");
    let song9 = new Song("Time of the Season", "The Zombies", "Psyco-Rock");

    songs.push(song1, song2, song3);

    let allSongs = [song1, song2, song3, song4, song5, song6, song7, song8, song9];

    let playlist = new Playlist(songs);

    recommendSong(playlist, allSongs, 2);

    expect(playlist.songs).to.include(song4);
    expect(playlist.songs).to.not.include(song5);
    expect(playlist.songs).to.not.include(song6);
    expect(playlist.songs).to.not.include(song7);
    expect(playlist.songs).to.include(song8);
    expect(playlist.songs).to.not.include(song9);
  });
});