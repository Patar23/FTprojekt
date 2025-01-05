<template>
  <div id="app">
    <header>
      <div class="header-container">
        <h1>Filmový svet</h1>
        <nav>
          <ul>
            <li><router-link to="/" class="nav-link">Domov</router-link></li>
            <li><router-link to="/about" class="nav-link">O nás</router-link></li>
            <li><router-link to="/movies" class="nav-link">Filmy</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>&copy; 2025 Filmový svet</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>

header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  font-size: 2rem;
  font-weight: bold;
}

nav ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav li {
  margin: 0 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

.nav-link:hover {
  color: #fbbf24;
  text-decoration: underline;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}


main {
  min-height: calc(100vh - 200px);
  padding: 2rem;
  background-color: #f7f7f7;
}


footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  font-size: 0.9rem;
}
</style>
