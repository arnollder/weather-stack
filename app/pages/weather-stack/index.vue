<template>
  <h2 class="weather-stack-title">Weather today</h2>
  <WeatherWidget></WeatherWidget>
</template>

<script setup lang="ts">
import WeatherWidget from './weather-widget.vue';

</script>

<style scoped>
.weather-stack-title {
  font-size: 32px;
  text-align: center;
}
</style>
