<template>
  <div class="root-footer">
    <div class="right-footer">
        <p>prod. by ARNOLDER</p>
        <p class="footer-zo">*никакие права не защищены</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.root-footer {
  font-size: 52px;
  height: 150px;
  justify-content: center;
  align-items: center;
  background: radial-gradient(rgb(255, 115, 0), rgb(0, 132, 255));
  color: aliceblue;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.right-footer {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.footer-zo {
  font-size: 12px;
}
</style>
