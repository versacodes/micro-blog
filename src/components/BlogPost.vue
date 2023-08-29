<script setup>
import BaseHeading from './BaseHeading.vue'
</script>

<template>
  <section :class="[ 'box', $style['box--post'] ]">
    <div :class="[ 'wrapper', $style['wrapper--post'] ]">
      <BaseHeading
        value="Start Of New Beginning"
        :type="1"
        child-class="title"
      />
      
      <div :class="[ $style['box--details'] ]">
        <p class="content">Author</p>
        <p class="content">Date</p>
      </div>

      <p class="content">Aenean ullamcorper orci et vulputate fermentum. Cras erat dui, finibus vel lectus ac, pharetra dictum odio. Nullam tempus scelerisque purus, sed mattis elit condimentum nec. Cras vel elit sed mi placerat pharetra eget vel odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tempus scelerisque purus, sed mattis elit condimentum nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ac nulla varius diam ultrices rutrum.</p>
      
      <ul :class="[$style.list, 'list']">Tags:
      	<li :class="$style['list-item']">javascript</li>
      	<li :class="$style['list-item']">frontend</li>
      	<li :class="$style['list-item']">vue</li>
      </ul>
    </div>
  </section>
</template>

<style module>
.box--post {
  display: block;
}

.box--details {
  display: flex;
  width: 50%;
  /* background: #fff; */
  justify-content: space-between;
  margin-bottom: 1.4rem;
}

.wrapper--post {
  display: block;
}

.list {
  display: flex;
  margin-top: 1.4rem;
  flex-wrap: wrap;
  width: 50%;
}

.list-item ~ .list-item {
  margin-left: 1rem;
}
</style>
