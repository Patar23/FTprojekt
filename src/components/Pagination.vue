<!--components/Pagination.vue-->
<template>
  <div class="pagination">
    <button @click="goToPage(page - 1)" :disabled="page <= 1">Predchádzajúca</button>
    <span>{{ page }} / {{ totalPages }}</span>
    <button @click="goToPage(page + 1)" :disabled="page >= totalPages">Ďalšia</button>
  </div>
</template>

<script>
export default {
  name: 'MoviePagination',
  props: {
    page: Number,
    totalPages: Number,
  },
  methods: {
    goToPage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.$emit('change-page', newPage);
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  text-align: center;
  margin-top: 2rem;
}

.pagination button {
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
