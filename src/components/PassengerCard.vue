<script setup lang="ts">
import type { Passenger } from '@/types'
defineProps<{
  psg: Passenger
}>()
</script>

<template>
  <RouterLink class="psg-link" :to="{ name: 'detail-view', params: { id: psg._id } }">
    <div class="psg-card">
      <h2>{{ psg.name }}</h2>
      <p>Trips: {{ psg.trips }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.psg-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.psg-card p {
  margin-bottom: 0;
}
.psg-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  color: white;
  background-color: #2c3e50;
}
.psg-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
