<script setup>
import BaseHeading from './BaseHeading.vue'
import MainSectionCard from './MainSectionCard.vue'

function testLog() {
  console.log('This is a test event')
}

</script>

<template>
	<div :class="[ $style.box, 'box' ]">
  	<BaseHeading
  		:type="1"
  		value="Articles"
  		:child-class="[ $style['box--title'], 'title' ]"
  	/>
  	<MainSectionCard @some-event="testLog" />
  </div>
</template>

<style module>
.box--title {
  text-align: center;
}

@media screen and (min-width: 750px) {
	.box--title {
		font-size: 2.8rem;
	}
}
</style>
