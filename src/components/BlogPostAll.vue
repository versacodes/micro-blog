<script setup>
import MainSectionCard from './MainSectionCard.vue'
import { ref } from 'vue'

</script>

<template>
  <section :class="[ 'box' ]">
    <div :class="[ 'wrapper', $style['wrapper--posts-section'] ]">
      <h1 :class="[ 'title', $style['title--posts-section'] ]">All Blog Posts</h1>
      <MainSectionCard/>
    </div>
  </section>
</template>

<style module>
.title--posts-section {
  text-align: center;
}

.wrapper--posts-section {
  flex-direction: column;
}
</style>
