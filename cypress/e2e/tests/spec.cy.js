const Featuring = require("../../../lib/featuring");
const GenreList = require('../../../lib/genreList');
const Song = require('../../../lib/song');
const Playlist = require('../../../lib/playlist');

describe('Song recommendation', () => {
  it('Test song recommendation', () => {
    let songs = [];
    let song1 = new Song("Feo Fuerte y Formal", "Loquillo Y Los Trogloditas", "Rock");
    let song2 = new Song("Venezia", "Hombres G", "Pop-Rock");
    let collab3 = new Featuring(["Loquillo Y Los Trogloditas", "Fito y Fitipaldis"]);
    let song3 = new Song("Luché contra la ley", collab3, "Rock");

    songs.push(song1, song2, song3);

    let suggestedSong = new Song("Antes de que cuente diez", "Fito y Fitipaldis", "Rock");

    let aux = new Playlist("test", []);
    let playlist = new Playlist("Fav songs", songs);
    let sortedGenres = playlist.getSortedGenres();

    let likely = 0;
    for (let genrePair of sortedGenres) {
      let genre = genrePair[0];
      if (suggestedSong.genre === genre) {
        likely += 5 * genrePair[1];
      }
    }

    for (let song of playlist.songs){
      if (typeof song.interpretes !== 'string'){
        for (let artist of song.interpretes.colaboradores){
          if (playlist.getSortedGenres(artist, suggestedSong.interpretes)){
            likely += 50;
          }
        }
      }
    }


    expect(likely >= 50).to.eq(true);

  })
})