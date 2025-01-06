// /stores/favoriteMovies.js
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => {
    const storedFavorites = localStorage.getItem('favoriteMovies');
    return {
      favoriteMovies: storedFavorites ? JSON.parse(storedFavorites) : [],
    };
  },
  actions: {
    addToFavorites(movie) {
      if (!this.favoriteMovies.some(favMovie => favMovie.href === movie.href)) {
        this.favoriteMovies.push(movie);
        this.saveFavorites();
      }
    },
    removeFromFavorites(movie) {
      this.favoriteMovies = this.favoriteMovies.filter(favMovie => favMovie.href !== movie.href);
      this.saveFavorites();
    },
    saveFavorites() {
      localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
    },
  },
});
