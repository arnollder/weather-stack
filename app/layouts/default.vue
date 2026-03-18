<template>
  <div class="layout-wrapper">
    <header class="header">Weather Stack</header>
    <nav class="nav">
        <NuxtLink active-class="active-link" class="nav-link" to="/">Main</NuxtLink>
        <NuxtLink active-class="active-link" class="nav-link" to="/posts">Posts</NuxtLink>
        <NuxtLink active-class="active-link" class="nav-link" to="/weather-stack">Weather</NuxtLink>
    </nav>
    <div class="content"><slot></slot></div>
    <!-- <footer class="footer">
        <p>prod. by Arnolder</p>
        <p class="footer-zo">*никакие права не защищены</p>
    </footer> -->
    <FooterLayout></FooterLayout>
  </div>
</template>

<script setup lang="ts">
import FooterLayout from './footer-layout.vue';

</script>

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
    background: radial-gradient(rgb(255, 115, 0), rgb(0, 132, 255));
    color: aliceblue;
}
.header {
    font-size: 52px;
}
.footer {
    padding: 30px;
    display: block;
    text-align: right;
}
.footer-zo {
    font-size: 12px;
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
