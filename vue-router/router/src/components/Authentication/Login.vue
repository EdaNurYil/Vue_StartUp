<template>
  <div>
    <h1>Login</h1>
    <p class="text-muted">Demo auth: click login to set a token.</p>

    <div class="d-flex gap-2">
      <button class="btn btn-success" @click="login">Login</button>
      <button class="btn btn-outline-danger" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

function login() {
  localStorage.setItem('token', 'demo-token');
  const redirectTo = route.query.redirect || '/';
  router.push(redirectTo);
}
function logout() {
  localStorage.removeItem('token');
  router.push('/');
}
</script>
