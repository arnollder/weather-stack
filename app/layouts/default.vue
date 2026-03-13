<template>
  <div class="layout-wrapper">
    <header class="header">header</header>
    <nav class="nav">
        <NuxtLink active-class="active-link" class="nav-link" to="/">Main</NuxtLink>
        <NuxtLink active-class="active-link" class="nav-link" to="/posts">Posts</NuxtLink>
        <NuxtLink active-class="active-link" class="nav-link" to="/weather-stack">Weather</NuxtLink>

        <!-- <NuxtLink active-class="active-link" target="_blank" class="nav-link" to="https://yandex.by/">Yandex</NuxtLink> -->
    </nav>
    <div class="content"><slot></slot></div>
    <footer class="footer">footer</footer>
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
.nav {
    margin: 10px;
    display: flex;
    gap: 15px;
    height: 30px;
}
.nav-link {
    padding: 5px 10px;
    background-color: darkgray;
    border-radius: 10px;
}
.active-link {
    color: red;
}
</style>
