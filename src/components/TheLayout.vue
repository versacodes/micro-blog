<script setup>
</script>

<template>
	<div class="container">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<slot name="main"></slot>
		</main>
		<section>
			<slot name="contact"></slot>
		</section>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<style scoped>
main {
  margin-bottom: 5rem;
}
</style>
