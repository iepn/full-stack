<template>
  <main></main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  history.back();
});
</script>
