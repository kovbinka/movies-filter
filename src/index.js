import data from './data.js';
import filterMovies from './utils/filter.js'

const dom = {
  searchBar : document.getElementById('search'),
  moviesList : document.getElementById('movies-list')
}

let timeoutId;
let outputData = data.movies;

function createMovies (movies = []) {
  dom.moviesList.innerHTML = '';

  if (movies.length === 0) {
    dom.moviesList.innerHTML = '<div class="li-one">Sorry we can not find this movie</div>';
  }

  movies.forEach((element) => {
    const movie = document.createElement('li');
    movie.classList.add('movie-element');

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = element.img;
    img.alt = `${element.name}`;

    const name = document.createElement('h3');
    name.classList.add('name');
    name.innerHTML = element.name;

    movie.append(img, name);
    dom.moviesList.appendChild(movie);
  });
};

//function to sort movies


// add event to input
dom.searchBar.addEventListener('input', (e) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
      outputData = filterMovies(e.target.value, data.movies);
      createMovies(outputData);
  }, 300);
});

document.addEventListener('DOMContentLoaded', () => {
  createMovies(data.movies);
});
