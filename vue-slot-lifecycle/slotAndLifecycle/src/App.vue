<template>
  <div id="app" class="container mt-5">
    <h1 class="text-center text-primary mb-4">
      Vue Slot + Lifecycle + Composable Demo
    </h1>
    <Parent />
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import Parent from './components/Parent.vue';

onBeforeMount(() => console.log('App beforeMount'));
onMounted(() => console.log('App mounted'));
</script>

<style>
/* optional */
</style>
