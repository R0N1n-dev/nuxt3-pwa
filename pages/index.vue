<script setup>
const { $pwa } = useNuxtApp();

//const toast = useToast();
onMounted(() => {
  if ($pwa.offlineReady) {
    console.log('App ready to work offline');
  }
});
</script>

<template>
  <div>
    Page: foo manshoo
    <i class='bx bxs-balloon'></i>
  </div>
</template>

<style scoped></style>
