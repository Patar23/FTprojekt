<!-- components/ImageCarousel.vue -->
<template>
  <div class="container" v-if="movies.length">
    <div class="carousel">
      <div
        class="carousel__face"
        v-for="movie in movies"
        :key="movie.id"
        :style="{ backgroundImage: `url(${movie.thumbnail})` }"
        @click="goToMovieDetail(movie.id)"
      >
        <span>{{ movie.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useMoviesStore } from "@/stores/movies";

export default {
  name: "ImageCarousel",
  computed: {
    movies() {
      const store = useMoviesStore();
      return store.allMovies.slice(0, 9);
    },
  },
  methods: {
    goToMovieDetail(id) {
      this.$router.push({ name: "movieDetail", params: { id } });
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background: lightgray;
  text-align: center;
  font-family: sans-serif;
  color: #fefefe;
}
.container {
  position: relative;
  width: 320px;
  margin: 100px auto 0 auto;
  perspective: 1000px;
}

.carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate360 60s infinite forwards linear;
}
.carousel__face {
  position: absolute;
  width: 300px;
  height: 187px;
  top: 20px;
  left: 10px;
  right: 10px;
  background-size: cover;
  box-shadow:inset 0 0 0 10px rgba(0,0,0,0.5);
  display: flex;
}

span {
  margin: auto;
  font-size: 2rem;
}


.carousel__face:nth-child(1) {
  transform: rotateY(  0deg) translateZ(430px); }
.carousel__face:nth-child(2) {
    transform: rotateY( 40deg) translateZ(430px); }
.carousel__face:nth-child(3) {
  transform: rotateY( 80deg) translateZ(430px); }
.carousel__face:nth-child(4) {
  transform: rotateY(120deg) translateZ(430px); }
.carousel__face:nth-child(5) {
 transform: rotateY(160deg) translateZ(430px); }
.carousel__face:nth-child(6) {
 transform: rotateY(200deg) translateZ(430px); }
.carousel__face:nth-child(7) {
 transform: rotateY(240deg) translateZ(430px); }
.carousel__face:nth-child(8) {
  transform: rotateY(280deg) translateZ(430px); }
.carousel__face:nth-child(9) {
  transform: rotateY(320deg) translateZ(430px); }



@keyframes rotate360 {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

</style>
