<script setup>
import BaseHeading from './BaseHeading.vue'
</script>

<template>
	<BaseHeading
		:type="1"
		value="MicroBlog"
		:child-class="$style.logo"
	/>
</template>

<style module>
.logo {
	font-size: 1.8rem;
	text-align: center;
	margin-bottom: 1rem;
}

@media screen and (min-width: 600px) {
	.logo {
		font-size: 1.8rem;
	}
}
</style>
