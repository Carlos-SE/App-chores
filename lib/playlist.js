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
                this.debug = feat;
                this.artists.add(feat);
            }
        })


    };

    getSortedGenres(){
        let arr = Object.entries(this.genres).sort((a,b) => b[1] - a[1]);
        let dic = {};
        for (let pair of arr){
            dic[pair[0]] = pair[1];
        }

        return dic;
    }

    hasFeaturing(artist){
        if (this.artists.has(artist)){
            return true;
        }

        return false;
    }

}

module.exports = Playlist