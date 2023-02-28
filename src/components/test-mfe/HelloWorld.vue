<script setup lang="ts">
import CheckSave from "../../assets/icons/check-save.svg";
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="hello-world">
    <div id="check">
      <img :src="CheckSave" />
    </div>

    <h1 class="hello-world">Hello {{ msg }}</h1>
  </div>
</template>

<style scoped>
.hello-world {
  color: orange;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
