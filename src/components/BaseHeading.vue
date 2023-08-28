<script setup>
defineProps({
	type: Number,
	value: String,
	style: Object,
	childClass: [String, Array],
})
</script>

<template>
	<h1 v-if="type === 1" :style="style" :class="childClass">{{value}}</h1>
	<h2 v-if="type === 2" :style="style" :class="childClass">{{value}}</h2>
	<h3 v-if="type === 3" :style="style" :class="childClass">{{value}}</h3>
	<h4 v-if="type === 4" :style="style" :class="childClass">{{value}}</h4>
	<h5 v-if="type === 5" :style="style" :class="childClass">{{value}}</h5>
	<h6 v-if="type === 6" :style="style" :class="childClass">{{value}}</h6>
</template>

<style scoped>

</style>
