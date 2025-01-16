// movies.js
import { defineStore } from 'pinia';
import moviesData from '@/assets/movies-250.json';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    allMovies: [],
    carouselMovies: [],
  }),
  actions: {
    loadMovies() {
      this.allMovies = moviesData.movies;
      if (this.carouselMovies.length === 0) {
        this.setCarouselMovies();
      }
    },
    setCarouselMovies() {
      const filteredMovies = this.allMovies.filter(movie => movie.thumbnail);
      const shuffled = [...filteredMovies].sort(() => 0.5 - Math.random());
      this.carouselMovies = shuffled.slice(0, 9);
    },
    filterMovies(query) {
      return this.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
});
