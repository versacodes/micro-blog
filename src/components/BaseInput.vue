<script setup>
defineProps({
  type: String,
  placeHolder: String,
  classInput: String,
  nameInput: String,
  isRequired: Boolean,
  hasLabel: Boolean,
  textLabel: String,
  forInput: String
})
</script>

<template>
  <label v-if="hasLabel" :for="forInput">{{ textLabel }}</label>
  <input
    :type="type"
    :placeholder="placeHolder"
    :class="classInput"
    :name="nameInput"
    :required="isRequired"
    :id="forInput"
  />
</template>

<style scoped>
.input {
  padding: 0.8rem;
  display: inline-block;
  width: 70%;
}

@media screen and (min-width: 750px) {
  .input {
    width: 80%;
    font-size: 1.2rem;
    padding: 1.2rem;
  }
}
</style>
