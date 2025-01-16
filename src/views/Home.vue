<!--views/Hom.vue-->
<template>
  <section>
    <h1>Vitajte vo Filmovom svete!</h1>
    <p><b>"Objavte svet filmov, ktorý máte na dosah ruky. Prehľadávajte databázu nových filmov, sledujte štatistiky a vytvárajte vlastné zoznamy obľúbených filmov!"</b></p>
    <h2>"Tu je náš výber pre vás: Nezmeškajte tieto filmové hity!"</h2>
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
}
h2 {
  margin-top: 70px;
}
p {
  margin-top: 20px;
}
</style>
