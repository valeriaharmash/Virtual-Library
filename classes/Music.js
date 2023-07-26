// import the Media class:
const Media = require('./Media')
// create your Music class:
class Music extends Media {
	constructor(title, year, genre, artist, length) {
		super(title, year, genre)
		this.artist = artist
		this.length = length
	}
	summary() {
		return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
	}
	static shortestAlbum(albums) {
		let shortestLength = albums[0].length
		let temp = null
		for (let i = 1; i < albums.length; i++) {
			if (albums[i].length < shortestLength) {
				shortestLength = albums[i].length
				temp = albums[i]
			}
		}
		return temp
	}
}

// don't change below
module.exports = Music
