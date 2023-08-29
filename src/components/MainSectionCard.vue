<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const posts = ref([
  {
    id: 0,
    title: "How to use Vue-Router",
    content: "Cras erat dui, finibus vel lectus ac, pharetra dictum odio. Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc. Integer ultricies malesuada quam.",
    tags: ['vue', 'javascript', 'html']
  },
  {
    id: 1,
    title: "How to use <style module> in Vue SFC",
    content: "Cras erat dui, finibus vel lectus ac, pharetra dictum odio. Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc. Integer ultricies malesuada quam.",
    tags: ['vue', 'javascript', 'html']
  },
  {
    id: 2,
    title: "How to use Vue Pinia State Management",
    content: "Cras erat dui, finibus vel lectus ac, pharetra dictum odio. Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc. Integer ultricies malesuada quam.",
    tags: ['vue', 'javascript', 'html']
  },
])

defineEmits(['someEvent'])
</script>

<template>
	<div
    class="card"
    v-for="post in posts"
    :key="post.id+Math.random()"
    @click="router.push({name: 'post'})"
  >
		<h3 class="title card--title">{{ post.title }}</h3>
		<p class="content">{{ post.content }}</p>
	</div>
</template>

<style scoped>
.content {
  line-height: 1.6;
  color: #444;
  font-size: 1rem;
}

.card {
  background: #abd;
  padding: 2rem;
}

.card ~ .card {
  margin-top: 1rem;
}

.card--title {
	font-size: 1.4rem;
	margin-bottom: 1rem;
}

</style>
