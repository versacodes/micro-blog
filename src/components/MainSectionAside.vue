<script setup>
import BaseHeading from './BaseHeading.vue'
</script>

<template>
  <hr :class="$style['aside-hr']">
	<aside :class="[ $style.aside, 'box' ]">
    <div :class="$style.wrapper">
      <BaseHeading
        value="Suggestions"
        :type="2"
        :child-class="$style.title"
      />
      <ul class="list">
        <li :class="$style['list-item']">Post 1</li>
        <li :class="$style['list-item']">Post 2</li>
        <li :class="$style['list-item']">Post 3</li>
      </ul>
    </div>
  </aside>
</template>

<style module>
.aside {
  text-align: center;
}

.title {
	font-size: 1.8rem;
	margin-bottom: 1.8rem;
}

.list-item ~ .list-item {
  margin-top: 1rem;
}

@media screen and (min-width: 750px) {
  .aside-hr {
    display: none;
  }
  .aside {
    border-left: 1px dashed #777;
  }
  .title {
    font-size: 2.4rem;
  }
}
</style>
