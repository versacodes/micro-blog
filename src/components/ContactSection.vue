<script setup>
import BaseHeading from './BaseHeading.vue'
import BaseButton from './BaseButton.vue'
import BaseInput from './BaseInput.vue'
</script>

<template>
  <section class="box">
  	<div :class="[$style.wrapper, 'wrapper']">
      <BaseHeading
        value="Contact Me"
        :type="2"
        :child-class="[$style.title, 'title']"
      />
      
      <p
        :class="[$style.content, 'content']"
      >Pellentesque habitant morbi tristique senectus et netus. Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.</p>
      
      <form
        :class="$style.form"
        method="post"
        action=""
      >
      	<BaseInput
          type="text"
          name-input="email"
          place-holder="Enter your email address"
          :class-input="$style.input"
        />
      	<BaseButton
          :class-button="$style.button"
          value="Submit"
        />
      </form>
   </div>
  </section>
</template>

<style module>
/* .contact { */
/*   background: #eaeaf0; */
/*   padding: 3.5rem 2rem; */
/* } */

.content {
  text-align: center;
}

.wrapper {
  margin: 0 auto;
  display: block;
}

.title {
  text-align: center;
	margin-bottom: 1rem;
}

.form {
  text-align: center;
  margin-top: 1.8rem;
}

.input {
  padding: 0.8rem;
  display: inline-block;
  width: 70%;
}

.button {
  padding: 0.8rem;
  display: inline-block;
  width: 30%;
  background: #457;
  color: white;
  font-weight: bold;
}

@media screen and (min-width: 600px) {
  .input, .button {
    font-size: 1rem;
    padding: 1rem;
  }
  .input {
    width: 80%;
  }
  .button {
    width: 20%;
  }
}
</style>
