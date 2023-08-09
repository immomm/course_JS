'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false	
};

for (let i = 0; i < 2; i++){

	let a = prompt ('Один из последних просмотренных фильмов?', '');
	while(!a || a.length > 50){
		a = prompt ('На сколько вы его оцените?', '');
	}

	let b = prompt ('На сколько вы его оцените?', '');
	while(!b || b.length > 50){
		b = prompt ('На сколько вы его оцените?', '');
	}
	personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10){
	console.log ('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count <= 30){
	console.log ('Вы классический зритель');
} else if (personalMovieDB.count > 30){
	console.log ('Вы киноман');
} else {
	console.log ('Произошла ошибка');
}

//(a==10) ? console.log('true'):console.log('false') // тернарный оператор 



