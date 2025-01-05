<!--views/Movies.vue-->
<template>
  <section>
    <h2>Filmy</h2>
    <search-bar @search="onSearch" />
    <pagination
      :page="currentPage"
      :total-pages="totalPages"
      @change-page="changePage"
    />
    <div class="movies-grid">
      <div
        v-for="(movie, index) in paginatedMovies"
        :key="index"
        class="movie-card"
        @click="goToMovieDetail(movie)"
      >
        <img :src="movie.thumbnail" :alt="movie.title" class="movie-poster" />
        <h3>{{ movie.title }}</h3>
        <p><strong>Rok:</strong> {{ movie.year }}</p>
        <p><strong>Žánre:</strong> {{ movie.genres.join(', ') }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useMoviesStore } from '../movies';
import SearchBar from '../components/SearchBar.vue';
import Pagination from '../components/Pagination.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'MoviesPage',
  components: {
    SearchBar,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      moviesPerPage: 12,
      searchQuery: '',
    };
  },
  computed: {
    moviesStore() {
      return useMoviesStore();
    },
    filteredMovies() {
      return this.moviesStore.filterMovies(this.searchQuery).filter(movie => movie.thumbnail);
    },
    paginatedMovies() {
      return this.filteredMovies.slice(
        (this.currentPage - 1) * this.moviesPerPage,
        this.currentPage * this.moviesPerPage
      );
    },
    totalPages() {
      return Math.ceil(this.filteredMovies.length / this.moviesPerPage);
    },
  },
  methods: {
    onSearch(query) {
      this.searchQuery = query;
      this.currentPage = 1;
    },
    changePage(page) {
      this.currentPage = page;
    },
    goToMovieDetail(movie) {
      const router = useRouter();
      router.push({ name: 'movieDetail', params: { href: movie.href } });
    },
  },
  mounted() {
    this.moviesStore.loadMovies();
  },
};
</script>

<style scoped>
.movies-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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





