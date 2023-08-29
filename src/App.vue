<script setup>
import TheHeader from './components/TheHeader.vue'
import TheLayout from './components/TheLayout.vue'
import TheFooter from './components/TheFooter.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

</script>

<template>

	<TheLayout>
		<template #header>
			<TheHeader />
		</template>
		<template #main>
        <RouterView />
		</template>
		<template #footer>
			<TheFooter />
		</template>
	</TheLayout>

</template>

<style scoped>
</style>
