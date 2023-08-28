<script setup>
import BaseHeading from './BaseHeading.vue'
import MainSectionCard from './MainSectionCard.vue'
</script>

<template>
	<div :class="[ $style.box, 'box' ]">
  	<BaseHeading
  		:type="1"
  		value="Articles"	
  		:child-class="[ $style['box--title'], 'title' ]"
  	/>
  	<MainSectionCard/>
  </div>
</template>

<style module>
.box {
  padding: 3.5rem 2rem;
}

.box--title {
  text-align: center;
}

@media screen and (min-width: 750px) {
	.box--title {
		font-size: 2.8rem;
	}
}
</style>
