"use strict";

let numberOfFilms = prompt('How much films did you watch?');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: Boolean
};