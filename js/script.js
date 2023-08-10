'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	} 
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++){
		let a = prompt ('Один из последних просмотренных фильмов?', '').trim();
	
		while(!a || a.length > 50){
			a = prompt ('Один из последних просмотренных фильмов?', '').trim();
		}
	
		let b = prompt ('На сколько вы его оцените?', '').trim();
	
		while(!b || b.length > 50){
			b = prompt ('На сколько вы его оцените?', '').trim();
		}
	
		personalMovieDB.movies[a] = b;
	}
}

function detectPersonalLevel() {
	if (personalMovieDB.count < 10){
		console.log ('Просмотренно довольно мало фильмов');
	} else if (personalMovieDB.count <= 30){
		console.log ('Вы классический зритель');
	} else if (personalMovieDB.count > 30){
		console.log ('Вы киноман');
	} else {
		console.log ('Произошла ошибка');
	}
}

function showMyDB() {
	(!personalMovieDB.privat) ? console.log (personalMovieDB):console.log('ошибка'); // тернарный оператор 
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++){
		personalMovieDB.genres[i] = prompt (`Ваш любимы жанр под номером ${i+1}`).trim();
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false	
};

rememberMyFilms();

detectPersonalLevel();

writeYourGenres ();

showMyDB();
