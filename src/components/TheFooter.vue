<script setup>
	
</script>

<template>
  <footer :class="$style.footer">
  	<div :class="$style.wrapper">
    	<p :class="[ $style.content, 'content' ]">Created by <strong>Franz Amersian Tiongson</strong></p>
    </div>
  </footer>
</template>

<style module>
.footer {
  background: #457;
  padding: 2rem;
  text-align: center;
}

.wrapper {
  max-width: 750px;
  margin: 0 auto;
}

.content {
  color: #fff;
  font-size: 0.8rem;
}

@media screen and (min-width: 750px) {
  .content {
    font-size: 1rem;
  }
}
</style>
