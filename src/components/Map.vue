<!-- components/Map.vue -->
<template>
  <div>
    <h2>Naša poloha</h2>
    <iframe
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      src="https://www.openstreetmap.org/export/embed.html?bbox=17.10318%2C48.14623%2C17.11030%2C48.15010&amp;layer=mapnik&amp;marker=48.14816%2C17.10674"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
};
</script>

<style scoped>
iframe {
  width: 90%;
  height: 500px;
  border: none;
}
h2 {
  margin-top: 70px;
  margin-bottom: 40px;
}
</style>


