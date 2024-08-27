<template>
  <div class="imgs" :style="{ 'background-image': 'url(' + imageList[0] + ')' }">
  </div>
</template>

<script setup lang="ts">
const imageList = [
  "https://upload.d1lete.online//photo/8fee7071d2e9d3ec4ddfb5b541e47552.jpg"
]
</script>

<style lang="scss" scoped>
.imgs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -9;
  background-color: #363636;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
  animation: scaleAnimation 8s ease-in-out infinite;
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
