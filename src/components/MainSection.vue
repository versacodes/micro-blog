<script setup>
import MainSectionBox from './MainSectionBox.vue'
import MainSectionAside from './MainSectionAside.vue'

</script>

<template>
	<main class="main">
		<div class="wrapper">
	  	<MainSectionBox />
	  	<MainSectionAside />
	  </div>
 	</main>
</template>

<style scoped>
.main {
  color: #333;
  background: #eaeaf0;
}

.wrapper {
  max-width: 800px;
}

@media screen and (max-width: 600px) {
  .wrapper {
    flex-direction: column;
  }
}
</style>
