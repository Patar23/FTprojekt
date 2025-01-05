// router/index.js
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Movies from '../views/Movies.vue';
import MovieDetail from '../views/MovieDetails.vue';

export default [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/movies', component: Movies },
  { path: '/movie/:id', name: 'movieDetail', component: MovieDetail, props: true },
];



