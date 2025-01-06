<!--views/Hom.vue-->
<template>
  <section>
    <h2>Vitajte vo Filmovom svete!</h2>
    <ImageCarousel />
  </section>
</template>

<script>
import ImageCarousel from "@/components/ImageCarousel.vue";
import { useMoviesStore } from "@/stores/movies";

export default {
  name: "HomePage",
  components: {
    ImageCarousel,
  },
  mounted() {
    const store = useMoviesStore();
    store.loadMovies();
  },
};
</script>

<style scoped>
section {
  text-align: center;
  margin-top: 2rem;
}
</style>




