<!--components/SearchBar.vue-->
<template>
  <div class="search-bar">
    <input
      v-model="query"
      type="text"
      placeholder="Hľadať filmy..."
      @input="onSearch"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.query);
    },
  },
};
</script>

<style scoped>
.search-bar input {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 1rem auto;
}
</style>
