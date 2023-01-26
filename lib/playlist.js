const GenreList = require('./genreList');
const Song = require('./song');

class Playlist{

    // songs => list
    constructor(songs){
        this.songs = songs;
        this.genres = {};
        this.artists = new Set();

        this.songs.forEach((song) => {
            let genre = song.genre;
            let feat = song.interpretes;
            if (genre in this.genres){
                this.genres[genre]++;
            }
            else{
                this.genres[genre] = 1;
            }

            if (Array.isArray(feat)){
                for (let a of feat){
                    this.artists.add(a);
                }
            }
            else{
                this.artists.add(feat);
            }
        })

        this.sortedGenres = this.sortGenres();


    };

    sortGenres(){
        let dic = Object.fromEntries(Object.entries(this.genres).sort((a,b) => b[1] - a[1]));

        return dic;
    }

    getSortedGenres() {
        return this.sortedGenres;
    }

    hasFeaturing(artist){
        if (this.artists.has(artist)){
            return true;
        }

        return false;
    }

}

module.exports = Playlist