<script setup>
import TheHeader from './components/TheHeader.vue'
import TheLayout from './components/TheLayout.vue'
import TheFooter from './components/TheFooter.vue'
import { RouterView } from 'vue-router'
import { ref, provide } from 'vue'

const posts = ref([
  {
    id: 0,
    title: "How to use Vue-Router",
    content: "Cras erat dui, finibus vel lectus ac, pharetra dictum odio. Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc. Integer ultricies malesuada quam.",
    author: "Franz Amersian Tiongson",
    date: "14 Jul 2023",
    tags: ['vue', 'javascript', 'html']
  },
  {
    id: 1,
    title: "How to use <style module> in Vue SFC",
    content: "Cras erat dui, finibus vel lectus ac, pharetra dictum odio. Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc. Integer ultricies malesuada quam.",
    author: "Franz Amersian Tiongson",
    date: "14 Jul 2023",
    tags: ['vue', 'javascript', 'html']
  },
  {
    id: 2,
    title: "How to use Vue Pinia State Management",
    content: "Cras erat dui, finibus vel lectus ac, pharetra dictum odio. Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc. Integer ultricies malesuada quam.",
    author: "Franz Amersian Tiongson",
    date: "14 Jul 2023",
    tags: ['vue', 'javascript', 'html']
  },
])

provide('posts', posts)

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
