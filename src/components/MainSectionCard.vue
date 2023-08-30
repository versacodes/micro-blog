<script setup>
import { ref, inject } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()

const posts = inject('posts')
</script>

<template>
	<div
    class="card"
    v-for="(post, index) in posts"
    :key="post.id+Math.random()"
    @click="router.push({name: 'postId', params: {id: index}})"
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
