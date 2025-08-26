<template>
  <div>
    <h1>Product Detail</h1>
    <p class="text-muted">Product ID: {{ id }}</p>

    <div class="d-flex gap-2 mt-3">
      <router-link class="btn btn-outline-primary" :to="{ name: 'product.list' }">Back to List</router-link>
      <button class="btn btn-outline-secondary" @click="router.back()">Back</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
defineProps({ id: String });  // via props:true in route
const router = useRouter();
</script>
