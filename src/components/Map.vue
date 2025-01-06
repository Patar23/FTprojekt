<!-- components/Map.vue -->
<template>
  <div>
    <h3>Naša poloha</h3>
    <iframe
      width="600"
      height="450"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      src="https://www.openstreetmap.org/export/embed.html?bbox=17.10318%2C48.14623%2C17.11030%2C48.15010&amp;layer=mapnik"
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
  width: 100%;
  height: 400px;
  border: none;
}
</style>

