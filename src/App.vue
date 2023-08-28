<script setup>
import TheHeader from './components/TheHeader.vue'
import TheLayout from './components/TheLayout.vue'
import TheFooter from './components/TheFooter.vue'
import HomePageView from './pages/HomePageView.vue'
</script>

<template>

	<TheLayout>
		<template #header>
			<TheHeader/>
		</template>
		<template #main>
			<HomePageView/>
		</template>
		<template #footer>
			<TheFooter/>
		</template>
	</TheLayout>

</template>

<style scoped>
</style>
