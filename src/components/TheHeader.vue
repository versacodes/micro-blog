<script setup>
import TheHeaderLogo from './TheHeaderLogo.vue'
import TheHeaderNav from './TheHeaderNav.vue'
</script>

<template>
  <header class="header">
  	<div class="wrapper">
	  	<TheHeaderLogo />
      <!-- hr inside the wrapper, will respect wrapper size -->
	  	<hr>
	  	<TheHeaderNav />
	  </div>
  </header>
</template>

<style scoped>
header {
  background: #457;
  padding: 1rem;
  color: #fff;
}

hr {
	background: #fff;
}

.content {
  text-align: center;
}

.wrapper {
  margin: 0 auto;
  display: block;
}

a {
  color: #e8e8e8;
}

@media screen and (min-width: 750px) {
	.wrapper {
		max-width: 750px;
	}
}

@media screen and (max-width: 750px) {
	.demon {
    height: 10px;
    background: #fff;
	}
}
</style>
