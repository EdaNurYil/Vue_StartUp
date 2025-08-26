<template>
  <div id="app" class="container py-3">
    <Header ></Header>
    <main class="mt-4">
      <router-view />
    </main>
    <Footer ></Footer>
  </div>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue';
import Footer from '@/components/Layout/Footer.vue';
</script>