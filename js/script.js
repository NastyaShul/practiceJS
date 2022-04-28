"use sctrict"
/*const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


const a = prompt("Один из последний просмотреных фильмов?", "");
const b = prompt("На сколько его оцените?", "");
const c = prompt("Один из последний просмотреных фильмов?", "");
const d = prompt("На сколько его оцените?", "");

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
*/

/*
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const a = prompt("Один из последний просмотреных фильмов?", ""),
		b = prompt("На сколько его оцените?", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMoviesDB.movies[a] = b;
		console.log("done");
	} else {
		console.log("error");
		i--;
	}
}

if (personalMoviesDB.count < 10) {
	alert("Просмотрено довольно мало фильмов");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
	alert("Вы класический зритель");
} else if (personalMoviesDB.count >= 30) {
	alert("Вы киноман");
} else {
	alert("Произошла ошибка");
}

console.log(personalMoviesDB);
*/


let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
	}
}
start();

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Один из последний просмотреных фильмов?", ""),
			b = prompt("На сколько его оцените?", "");

		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMoviesDB.movies[a] = b;
			console.log("done");
		} else {
			console.log("error");
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMoviesDB.count < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
		alert("Вы класический зритель");
	} else if (personalMoviesDB.count >= 30) {
		alert("Вы киноман");
	} else {
		alert("Произошла ошибка");
	}
}
detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMoviesDB);
	}
}
showMyDB(personalMoviesDB.privat);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
	}
}
writeYourGenres();