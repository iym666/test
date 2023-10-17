/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Logan",
        "League of justice",
        "La-la land",
        "Durability",
        "SCOTT PILGRIM VS..."
    ]
};

const AD = document.querySelector('.promo__adv'),
      advertise = AD.querySelector('.promo__adv-title'),
      images = AD.querySelectorAll('img'),
      contentBG = document.querySelector('.promo__bg'),
      contentGenre = contentBG.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

// 1
images[0].remove()
images[1].remove()
images[2].remove()
// AD.removeChild(images[0]);
// AD.removeChild(images[1]);
// AD.removeChild(images[2]);
AD.removeChild(advertise);

//2

contentBG.removeChild(contentGenre);
contentBG.classList.add('promo__genre')
contentBG.insertAdjacentHTML('afterbegin', 'DRAMA');

//3
contentBG.style.backgroundImage = "url('img/bg.jpg')";
console.log(contentBG);

//4 && 5
movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
})