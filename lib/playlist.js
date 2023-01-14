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
        this.featurings = new Set();

        this.songs.forEach((song) => {
            let genre = song.genre;
            let feat = song.interprete;
            if (genre in this.genres){
                this.genres[genre]++;
            }
            else{
                this.genres[genre] = 1;
            }

            if (feat instanceof Featuring){
                this.featurings.add(feat);
            }
        })

    };

    getSortedGenres(){
        return Object.entries(this.genres).sort((a,b) => b[1] - a[1]);
    }

    hasFeaturing(artist1, artist2){
        this.featurings.forEach((feat) => {
            if (artist1 in feat.colaboradores && artist2 in feat.colaboradores){
                return true;
            }
        })

        return false;
    }

}

module.exports = Playlist