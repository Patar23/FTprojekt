// router/index.js
import HomePage from '../views/Home.vue';
import About from '../views/About.vue';
import Movies from '../views/Movies.vue';
import MovieDetail from '../views/MovieDetails.vue';
import FavoritePage from '../views/FavoriteMovies.vue';

export default [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/movies', component: Movies },
  { path: '/movie/:id', name: 'movieDetail', component: MovieDetail, props: true },
  { path: '/favorites', component: FavoritePage },
];


