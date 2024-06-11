<script setup lang="ts">
const {increment, num} = useShared();
</script>

<template>
  <div>
    {{num}}
    <button @click="increment">Increment</button>
  </div>
</template>