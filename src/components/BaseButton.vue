<script setup>
defineProps({
  classButton: [String, Array],
  value: String
})
</script>

<template>
  <button :class="classButton">{{ value }}</button>
</template>

<style scoped>
.button {
  padding: 0.8rem;
  display: inline-block;
  width: 30%;
  background: #457;
  color: white;
  font-weight: bold;
}

.button {
  width: 20%;
}
</style>
