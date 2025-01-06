<!-- views/FavoriteMovies.vue -->
<template>
  <section>
    <h2>Obľúbené Filmy</h2>
    <div class="movies-grid">
      <div
        v-for="(movie, index) in favoriteMovies"
        :key="index"
        class="movie-card"
      >
        <router-link :to="`/movie/${movie.href}`">
          <img :src="movie.thumbnail" :alt="movie.title" class="movie-poster" />
          <h3>{{ movie.title }}</h3>
          <p><strong>Rok:</strong> {{ movie.year }}</p>
          <p><strong>Žánre:</strong> {{ movie.genres.join(', ') }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>


<script>
import { useFavoritesStore } from '../stores/favoriteMovies';

export default {
  name: 'FavoritePage',
  computed: {
    favoriteMovies() {
      const favoritesStore = useFavoritesStore();
      return favoritesStore.favoriteMovies;
    },
  },
};
</script>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding: 3% 2% 2% 2%;
}

.movie-card {
  cursor: pointer;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}
</style>
