<template>
  <div>
    <NuxtPage />
    <VitePwaManifest />
  </div>
</template>

<script setup>
useHead({
  meta: [{
    name: "theme-color", content: "#00ffff"
  }]
})
</script>