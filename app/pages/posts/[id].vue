<template>
  <div class="post">Post {{ route.params.id }}</div>
  <a href="#">test link</a>
</template>

<script setup lang="ts">

const route = useRoute();
console.log(route);
</script>

<style scoped>
.post {
  font-size: 52px;
  font-weight: 700;
}
</style>
