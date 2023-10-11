"use strict";

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function() {
    personalMovieDB.count = +prompt('How much films did you watch?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How much films did you watch?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('You watched pretty few films!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('You are classic watcher!');
    } else if (personalMovieDB.count > 30) {
      console.log('You are movie geek!');
    } else {
      console.log('Error');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.private) {
      personalMovieDB.private = false
    } else {
      personalMovieDB.private = true
    }
  },
  writeYourGenres: function() {
    // for (let i = 1; i < 4; i++) {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Your favorite genre numbered ${i}`);

      // if(genre === '' || genre === null) {
      //   console.log('You write incorrect data or didn`t write at all!');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre
      // }

      let genres = prompt(`Write down your favorite genres with commas`).toLowerCase();

      if(genres === '' || genres === null) {
        console.log('You write incorrect data or didn`t write at all!');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres.split(', ')
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} - it is ${item}`);
    })
  }
};