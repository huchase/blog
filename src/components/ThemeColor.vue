<script setup lang='ts'>
// bean_green: '#C7EDCC',
// meyer_yellow: '#ede8e2',
// ruanyf_yellow: '#f5f5d5',
// white: '#ffffff',
const colors: string[] = ['#c7edcc', '#f5f5d5', '#000000']

const index = ref(colors.length - 1)

function toggleColor() {
  if (index.value === colors.length - 1)
    index.value = 0
  else
    ++index.value
}
const theme = computed(() => {
  return `color: ${colors[index.value]}`
})
</script>

<template>
  <a title="Theme Color">
    <fluent-dark-theme-24-filled :style="theme" @click="toggleColor" />
  </a>
</template>
