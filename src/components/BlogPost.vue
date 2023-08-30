<script setup>
import BaseHeading from './BaseHeading.vue'
import { inject } from 'vue'

const posts = inject('posts')

</script>

<template>
  <div :class="[ 'box' ]">
    <BaseHeading
      :value="posts[$route.params.id].title"
      :type="1"
      child-class="title"
    />
    
    <div :class="[ $style['box--details'] ]">
      <p :class="[ $style['content--details'], 'content' ]"><strong>Created by</strong>: {{ posts[$route.params.id].author }}</p>
      <p :class="[ $style['content--details'], 'content' ]"><strong>Posted on</strong>: {{ posts[$route.params.id].date }}</p>
    </div>

    <p class="content">{{ posts[$route.params.id].content }}</p>
    
    <ul :class="[ $style.list, 'list' ]">
      <span :class="[ $style.tag ]"><strong>Tags</strong>:</span>
      <li
        :class="[ $style['list--item'] ]"
        v-for="tag in posts[$route.params.id].tags"
      >{{ tag }}</li>
    </ul>
  </div>
</template>

<style module>
.box--details {
  display: flex;
  justify-content: space-between;
  max-width: 32rem;
  margin-bottom: 1.4rem;
}

.content--details {
  font-size: 0.8rem;
}

.list {
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  align-items: center;
  margin-top: 1.8rem;
  color: #444;
  row-gap: 6px;
}

.tag {
  margin-right: 10px;
  font-size: 0.8rem;
}

.list--item {
  border: 1px solid #444;
  padding: 0.3rem 1rem;
  border-radius: 25px;
  font-size: 0.8rem;
}

.list--item ~ .list--item {
  margin-left: 8px;
}

</style>
