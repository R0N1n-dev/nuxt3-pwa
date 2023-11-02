<template>
  <div>
    <VitePwaManifest />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  meta: [{
    name: "theme-color", content: "#00ffff"
  }]
});
</script>