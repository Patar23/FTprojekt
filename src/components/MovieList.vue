<!--components/MovieList.vue-->
<template>
  <div class="movie-list">
    <h1>Movie Library</h1>
    <div v-if="movies.length > 0" class="movies-container">
      <div v-for="movie in movies" :key="movie.imdbID" class="movie-card">
        <img :src="movie.Poster" :alt="movie.Title" class="movie-poster" />
        <div class="movie-info">
          <h2>{{ movie.Title }} ({{ movie.Year }})</h2>
          <p><strong>Genre:</strong> {{ movie.Genre }}</p>
          <p><strong>Plot:</strong> {{ movie.Plot }}</p>
        </div>
      </div>
    </div>
    <p v-else>No movies available.</p>
  </div>
</template>

<script>
import { useMoviesStore } from '@/movies.js';
import { onMounted } from 'vue';

export default {
  name: 'MovieList',
  setup() {
    const moviesStore = useMoviesStore();

    onMounted(() => {
      moviesStore.loadMovies();
    });

    return {
      movies: moviesStore.allMovies,
    };
  },
};
</script>


<style scoped>
.movie-list {
  text-align: center;
  padding: 20px;
}

.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.movie-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 10px;
}

.movie-poster {
  width: 100%;
  border-radius: 8px;
}

.movie-info {
  padding: 10px;
}

.movie-info h2 {
  margin: 10px 0;
}

.movie-info p {
  font-size: 14px;
  margin: 5px 0;
}

.movie-info strong {
  font-weight: bold;
}
</style>
