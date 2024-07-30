// App.vue
<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const perPage = ref(parseInt(route.query.perPage?.toString() || '2'))

watch(perPage, (newPerPage) => {
  router.push({ name: 'event-list-view', query: { ...route.query, perPage: newPerPage } })
})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'passenger' }">Passenger</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}

main {
  padding: 20px;
}

label {
  margin-right: 10px;
}

input[type='number'] {
  width: 50px;
}
</style>
