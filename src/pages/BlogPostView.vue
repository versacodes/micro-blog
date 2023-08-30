<script setup>
import BlogPost from '../components/BlogPost.vue'
import MainSectionAside from '../components/MainSectionAside.vue'
</script>

<template>
  <section class="post box">
    <div class="wrapper">
      <BlogPost />
      <MainSectionAside/>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 800px;
}

@media screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
