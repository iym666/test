"use strict";

let numberOfFilms = +prompt('How much films did you watch?', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

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
    
console.log(personalMovieDB);