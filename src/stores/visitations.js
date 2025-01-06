// stores/visitations.js
import { defineStore } from 'pinia';

export const useVisitStore = defineStore('visit', {
  state: () => ({
    visits: 0,
  }),
  actions: {
    loadVisits() {
      const storedVisits = localStorage.getItem('visits');
      this.visits = storedVisits ? parseInt(storedVisits, 10) : 0;
    },
    incrementVisits() {
      this.visits++;
      localStorage.setItem('visits', this.visits);
    },
  },
});
