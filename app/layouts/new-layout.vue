<template>
  <div class="layout-wrapper">
    <header class="header">new header</header>
    <div class="content"><slot></slot></div>
    <footer class="footer">new footer</footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}
.header, .footer {
    font-size: 32px;
    display: flex;
    height: 150px;
    justify-content: center;
    align-items: center; 
    background-color: gray;
}
.content {
    flex-grow: 1;
}
</style>
