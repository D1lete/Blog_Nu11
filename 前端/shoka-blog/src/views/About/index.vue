<template>
  <div class="page-header">
    <h1 class="page-title">关于</h1>
    <img class="page-cover" src="https://upload.d1lete.online//photo/8fee7071d2e9d3ec4ddfb5b541e47552.jpg"
      alt="" />
    <Waves></Waves>
  </div>
  <div class="bg">
    <div class="page-container">
      <div class="avatar-box">
        <img class="author-avatar" :src="blog.blogInfo.siteConfig.authorAvatar" />
      </div>
      <v-md-preview class="md" :text="blog.blogInfo.siteConfig.aboutMe"></v-md-preview>
    </div>
  </div>
</template>

<script setup lang="ts">
import useStore from "@/store";
const { blog } = useStore();
</script>

<style scoped>
.author-avatar {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  transition: all 0.5s;
}

.author-avatar:hover {
  transform: rotate(360deg);
}
</style>
