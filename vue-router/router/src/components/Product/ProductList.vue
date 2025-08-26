<template>
  <div>
    <h1 class="mb-3">Product List</h1>
    <ul class="list-group">
      <li v-for="p in products" :key="p.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ p.name }}</span>
        <button class="btn btn-sm btn-outline-primary" @click="view(p.id)">View</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const products = [
  { id: 'p100', name: 'Vue Hoodie' },
  { id: 'p200', name: 'Router Cap' },
  { id: 'p300', name: 'Composition Tee' }
];

function view(id) {
  router.push({ name: 'product.detail', params: { id } });
}
</script>
