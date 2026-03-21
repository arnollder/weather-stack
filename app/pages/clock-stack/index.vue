<template>
  <div class="clock-root">
    <h2 class="clock-title">What's time o-clock?</h2>
    <div class="clock-widget">
      <NuxtTime
        class="clock-temp"
        :datetime="new Date()"
        hour="2-digit"
        minute="2-digit"
      />
      <NuxtTime
        class="date-temp"
        :datetime="new Date()"
        year="numeric"
        month="long"
        day="numeric"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.clock-widget {
  margin: 20px auto;
  padding: 10px 20px;
  width: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: rgb(0, 228, 0);
  background-color: rgb(15, 15, 15);
}
.clock-title {
  text-align: center;
  font-size: 44px;
}
.date-temp {
  font-size: 32px;
} 
.clock-temp {
  font-size: 112px;
  font-weight: bold;
}
</style>
