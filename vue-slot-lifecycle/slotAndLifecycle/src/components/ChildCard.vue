<template>
  <div class="card mb-4">
    <div class="card-header bg-light">
      <slot name="header"></slot>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>

    <div class="card-footer bg-light">
      <!-- expose scoped data & methods to the parent -->
      <slot
        name="footer"
        :info="footerInfo"
        :count="count"
        :increment="increment"
        :decrement="decrement"
      ></slot>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import { useCounter } from '../composable/useCounter.js';

const footerInfo = { createdBy: 'Vue.js', year: 2025 };
const { count, increment, decrement } = useCounter();

// Lifecycle logs
onBeforeMount(() => console.log('ChildCard beforeMount'));
onMounted(() => console.log('ChildCard mounted'));
onBeforeUpdate(() => console.log('ChildCard beforeUpdate'));
onUpdated(() => console.log('ChildCard updated'));
onBeforeUnmount(() => console.log('ChildCard beforeUnmount'));
onUnmounted(() => console.log('ChildCard unmounted'));
</script>

<style>
/* optional */
</style>
