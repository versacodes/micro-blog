<script setup>
const links = ['Home', 'Posts', 'About']
</script>

<template>
  <nav class="nav">
    <ul class="list">
      <li class="list-item"
      		v-for="link in links"
      		:key="link+Math.random()"
      >
      	<a :href="`#${link}`"
      		 class="list-link"
      	>{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
	text-align: center;
	margin-top: 1rem;
}

.list {
  display: flex;
  list-style-type: none;
  justify-content: center;
  font-size: 0.8rem;
}

.list-item ~ .list-item {
	margin-left: 6px;
}

.list-link {
	color: white;
	padding: 0.6em 0.3em;
	text-decoration: none;
}

.list-link:hover {
	box-shadow: 0 3px #fff;
}

@media screen and (min-width: 750px) {
  .list-link {
    font-size: 1rem;
  }
}

</style>
