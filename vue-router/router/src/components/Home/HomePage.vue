<template>
  <div>
    <h1 class="mb-3">Home</h1>
    <p>Welcome to the home page.</p>

    <div class="d-flex gap-2 mt-3">
      <!-- button that navigates to contact (named route) -->
      <button class="btn btn-primary" @click="goContact">Go to Contact</button>
      <!-- back button -->
      <button class="btn btn-outline-secondary" @click="goBack">Back</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goContact() {
  router.push({ name: 'contact' });
}
function goBack() {
  router.back();
}
</script>
