<!-- components/ContactForm.vue -->
<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <h3>Napíšte nám</h3>
    <div>
      <label for="name">Meno:</label>
      <input type="text" id="name" v-model="formData.name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>
    <div>
      <label for="message">Správa:</label>
      <textarea id="message" v-model="formData.message" required></textarea>
    </div>
    <button type="submit">Odoslať</button>
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
      alert('Správa bola úspešne odoslaná!');
      this.formData = { name: '', email: '', message: '' };
    },
  },
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 2rem auto;
}
.contact-form div {
  margin-bottom: 1rem;
}
.contact-form label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.contact-form button {
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.contact-form button:hover {
  background-color: #0056b3;
}
.contact-form h3 {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
