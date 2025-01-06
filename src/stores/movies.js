//movies.js
import { defineStore } from 'pinia';
import moviesData from '@/assets/movies-250.json';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    allMovies: [],
  }),
  actions: {
    loadMovies() {
      if (!this.allMovies.length) {
        this.allMovies = moviesData.movies;
      }
    },
    filterMovies(query) {
      return this.allMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
});



