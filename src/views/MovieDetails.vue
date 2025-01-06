<!--views/MovieDetails.vue-->
<template>
  <section v-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="movie.thumbnail" :alt="movie.title" />
    <p><strong>Rok vydania:</strong> {{ movie.year }}</p>
    <p><strong>Žánre:</strong> {{ movie.genres.join(', ') }}</p>
    <p><strong>Obsadenie:</strong> {{ movie.cast.join(', ') }}</p>
    <p>{{ movie.extract }}</p>

    <button @click="toggleFavorite" class="btn">
      {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
  </section>
  <p v-else>Film nebol nájdený.</p>
</template>

<script>
import { useMoviesStore } from '../stores/movies';
import { useFavoritesStore } from '../stores/favoriteMovies';

export default {
  name: 'MovieDetail',
  props: ['id'],
  computed: {
    movie() {
      const store = useMoviesStore();
      return store.allMovies.find(movie => movie.href === this.id);
    },
    isFavorite() {
      const favoritesStore = useFavoritesStore();
      return favoritesStore.favoriteMovies.some(favMovie => favMovie.href === this.id);
    },
  },
  methods: {
    toggleFavorite() {
      const favoritesStore = useFavoritesStore();
      if (this.isFavorite) {
        favoritesStore.removeFromFavorites(this.movie);
      } else {
        favoritesStore.addToFavorites(this.movie);
      }
    },
  },
};
</script>

<style scoped>
button.btn {
  margin-top: 10px;
  padding: 10px;
  background-color: #fbbf24;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button.btn:hover {
  background-color: #f97316;
}
</style>

