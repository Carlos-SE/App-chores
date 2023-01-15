const Featuring = require("./featuring");
const GenreList = require('./genreList');
const Song = require('./song');

class Playlist{

    // songs => list
    constructor(name, songs){
        if (typeof name === 'string'){
            this.name = name;
        }
        else{
            this.name = 'NullName';
        }
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

            if (feat instanceof Featuring){
                for (let a of feat.colaboradores){
                    this.artists.add(a);
                }
            }
            else{
                this.debug = feat;
                this.artists.add(feat);
            }
        })


    };

    getSortedGenres(){
        return Object.entries(this.genres).sort((a,b) => b[1] - a[1]);
    }

    hasFeaturing(artist){
        if (this.artists.has(artist)){
            return true;
        }

        return false;
    }

}

module.exports = Playlist