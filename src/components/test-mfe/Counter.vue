<script setup lang="ts">
import { useCounterStore } from "../../stores/CounterStore";
const counterStore = useCounterStore();
</script>

<template>
  <div class="greetings">
    count {{ counterStore.count }}
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<style scoped>
.greetings {
  color: green;
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
  color: green;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
