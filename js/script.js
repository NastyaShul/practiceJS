"use sctrict"
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

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