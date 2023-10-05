"use strict";

let numberOfFilms = +prompt('How much films did you watch?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

let firstQuestion = prompt('One of the last watched movie?', ''),
    secondQuestion = prompt('How much would you rate the movie?', ''),
    thirdQuestion = prompt('One of the last watched movie?', ''),
    fourthQuestion = prompt('How much would you rate the movie?', '');

personalMovieDB.movies[firstQuestion] = secondQuestion;
personalMovieDB.movies[thirdQuestion] = fourthQuestion;
    
console.log(personalMovieDB);