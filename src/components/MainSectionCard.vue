<script setup>
defineEmits(['someEvent'])
</script>

<template>
	<div
    class="card"
    v-for="n in 3"
    :key="n+Math.random()"
    @click="$emit('someEvent')"
  >
		<h3 class="title card--title">Card Title</h3>
		<p class="content">Cras vel elit sed mi placerat pharetra eget vel odio. Cras vel elit sed mi placerat pharetra eget vel odio...</p>
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
