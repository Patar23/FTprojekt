<!-- views/About.vue -->
<template>
  <section>
    <h1>O nás</h1>
    <p>Filmový svet je knižnica filmov, kde nájdete všetky obľúbené filmy a informácie o nich.</p>

    <div>
      <h3>Počet navštívení stránky: {{ visitCount }}</h3>
    </div>
    <ContactForm />
    <MapComponent />
  </section>
</template>

<script>
import { useVisitStore } from '../stores/visitations';
import ContactForm from '../components/ContactForm.vue';
import MapComponent from '../components/Map.vue';

export default {
  name: 'AboutPage',
  components: {
    ContactForm,
    MapComponent,
  },
  setup() {
    const visitStore = useVisitStore();

    return {
      visitCount: visitStore.visits,
    };
  },
};
</script>

<style scoped>
section {
  text-align: center;
  margin-top: 2rem;
}
p {
  margin-top: 20px;
}
h3 {
  margin-top: 20px;
}
</style>


