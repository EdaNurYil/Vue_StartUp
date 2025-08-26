<template>
  <div class="card shadow-sm p-4">
    <h2 class="text-success mb-3">Parent Component</h2>

    <ChildCard>
      <!-- Named slot (header) -->
      <template #header>
        <h3 class="text-info mb-0">Hello from Parent!</h3>
      </template>

      <!-- Default slot -->
      <p class="lead mb-3">
        This is the body text, injected into the default slot.
      </p>

      <!-- Scoped slot (footer gets data/functions from Child) -->
      <template #footer="{ info, count, increment }">
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">
            Footer created by: {{ info.createdBy }} © {{ info.year }}
          </small>
          <div>
            <span class="badge bg-secondary me-2">Counter: {{ count }}</span>
            <button class="btn btn-sm btn-primary" @click="increment">Increase</button>
          </div>
        </div>
      </template>
    </ChildCard>
  </div>
</template>

<script setup>
import { onBeforeMount, onMounted, onUpdated } from 'vue';
import ChildCard from './ChildCard.vue';

onBeforeMount(() => console.log('Parent beforeMount'));
onMounted(() => console.log('Parent mounted'));
onUpdated(() => console.log('Parent updated'));
</script>

<style>
/* optional */
</style>
