// import the Media class:
const Media = require('./Media')
// create your Movie class:
class Movie extends Media {
	constructor(title, year, genre, director, duration, rating) {
		super(title, year, genre)
		this.director = director
		this.duration = duration
		this.rating = rating
	}
	summary() {
		return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
	}
	static longestMovie(movies) {
		let longestLength = 0
		let temp = null
		for (let i = 0; i < movies.length; i++) {
			if (movies[i].duration > longestLength) {
				longestLength = movies[i].duration
				temp = movies[i]
			}
		}
		return temp
	}
}
// don't change below
module.exports = Movie
