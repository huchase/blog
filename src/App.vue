<script setup lang="ts">
useHead({
  // TODO: How to use @vueuse/head & unocss ?
  meta: [
    { property: 'key', content: 'value' },
  ],
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>
