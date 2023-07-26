const Media = require("./Media");

// import the Media class:
class Book extends Media {
	constructor(title, year, genre, author, numPages, rating) {
		super(title, year, genre)
		this.author = author;
		this.numPages = numPages;
		this.rating = rating;
	}
	summary() {
		return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
	}

	static highestRating(books) {
		let highestRate = 0;
		let temp = null;
		for (let i = 0; i < books.length; i++) {
			if (books[i].rating > highestRate) {
				highestRate = books[i].rating;
				temp = books[i];
			}
		}
		return temp;
	}
}
// create your Book class:

// don't change below
module.exports = Book;
