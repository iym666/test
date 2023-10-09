"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How much films did you watch?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How much films did you watch?', '');
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};


//functions
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let firstQuestion = prompt('One of the last watched movie?', ''),
        secondQuestion = prompt('How much would you rate the movie?', '');
  
    if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length <= 50 && secondQuestion.length <= 50) {
      personalMovieDB.movies[firstQuestion] = secondQuestion;
      console.log('done!')
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('You watched pretty few films!');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classic watcher!');
  } else if (personalMovieDB.count > 30) {
    console.log('You are movie geek!');
  } else {
    console.log('Error');
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre numbered ${i}`);
  }
}

writeYourGenres();