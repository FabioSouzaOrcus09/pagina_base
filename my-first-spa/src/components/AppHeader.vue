<template>
  <header class="app-header">
    <h1 class="site-title">Meu Site</h1>
    <nav>
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/">Home</router-link></li>
        <li class="nav-item"><router-link to="/sobre">Sobre</router-link></li>
        <li class="nav-item"><router-link to="/contato">Contato</router-link></li>
        <li class="nav-item"><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.app-header {
  background-color: #282c34; 
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-title {
  font-size: 1.8em;
  margin: 0;
}

.nav-list {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 20px;
}

.nav-item a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  transition: background 0.3s, color 0.3s;
}

.nav-item a:hover {
  background-color: #61dafb; 
  color: #282c34; 
  border-radius: 5px; 
}
</style>
