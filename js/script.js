'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
	
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		} 
	},
	rememberMyFilms: function() {
		for (let i = 0; i < 2; i++){
			let a = prompt ('Один из последних просмотренных фильмов?', '');
		
			while(!a || !a.trim() || a.length > 50){
				a = prompt ('Один из последних просмотренных фильмов?', '');
			}
		
			let b = prompt ('На сколько вы его оцените?', '');
		
			while(!b || !b.trim() || b.length > 50){
				b = prompt ('На сколько вы его оцените?', '');
			}
		
			personalMovieDB.movies[a] = b;
		}
	},
	detectPersonalLevel: function() {
		if (personalMovieDB.count < 10){
			console.log ('Просмотренно довольно мало фильмов');
		} else if (personalMovieDB.count <= 30){
			console.log ('Вы классический зритель');
		} else if (personalMovieDB.count > 30){
			console.log ('Вы киноман');
		} else {
			console.log ('Произошла ошибка');
		}
	},
	showMyDB:function() {
		(!personalMovieDB.privat) ? console.log (personalMovieDB):console.log('ошибка'); // тернарный оператор 
	},
	writeYourGenres:function() {
		for (let i = 0; i < 3; i++){
			personalMovieDB.genres[i] = prompt (`Ваш любимы жанр под номером ${i + 1}`);

			while(!personalMovieDB.genres[i] || !personalMovieDB.genres[i].trim()) personalMovieDB.genres[i] = prompt (`Ваш любимы жанр под номером ${i + 1}`);
		}

		personalMovieDB.genres.forEach(function(a, i) {
			console.log(`Любимый жанр #${i+1} - это ${a}`);
		});
	},
	toggleVisibleMyDB: function() {
		(personalMovieDB.privat)? personalMovieDB.privat = false: personalMovieDB.privat = true; 
	}
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.writeYourGenres();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();
