<template>
  <div id="app">
    <AppHeader />
    <main>
      <RouterLink to="/naruto"> Naruto</RouterLink>
      <router-view />

      

    </main>

    <AppFooter />
  </div>


</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
}
</style>
