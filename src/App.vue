<script setup>
import TheHeader from './components/TheHeader.vue'
import MainSection from './components/MainSection.vue'
import TheLayout from './components/TheLayout.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>

	<TheLayout>
		<template #header>
			<TheHeader/>
		</template>
		<template #main>
			<MainSection/>
		</template>
		<template #contact>
			<ContactSection/>
		</template>
		<template #footer>
			<TheFooter/>
		</template>
	</TheLayout>

</template>

<style scoped>
</style>
