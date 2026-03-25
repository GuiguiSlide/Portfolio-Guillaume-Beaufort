<template>
  <div class="h-screen flex items-center justify-center">
    <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg">
      <h1 class="text-6xl font-bold">Random Vue Page</h1>
      <p class="mt-10 text-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quia!
      </p>
      <button class="mt-10 px-10 py-2 bg-orange-500 rounded-lg" @click="handleClick">
        Click me!
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log("Button clicked!");
}
</script>

<style scoped>
</style>
