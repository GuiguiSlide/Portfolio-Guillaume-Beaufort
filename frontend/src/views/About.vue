<template>
  <div class="h-screen flex items-center justify-center">
    <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg">
      <h1 class="text-6xl font-bold">À propos</h1>
      <p class="mt-10 text-4xl">
        je vie a plouzané et je suis le meilleur
      </p>
      <button class="mt-10 px-10 py-2 bg-orange-500 rounded-lg" @click="handleClick">
        Click me!
      </button>
    </div>
    <div>
        <p>
            j'ai une formation de concepteur développeur d'applications, j'ai fait plusieurs projets en python, c, arduino, svelte, tailwindcss, nodejs, postgresql et godot
        </p>
    </div>
  </div>
</template>

<script setup lang="ts">
let nombredeclics = 0;
const handleClick = () => {
    console.log("Button clicked!");
    nombredeclics += 1;
    if (nombredeclics >= 5) {
        const div = document.createElement('div');
        div.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-lg';
        div.innerHTML = `<p>Vous avez cliqué ${nombredeclics} fois !</p>`;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 3000);
    }
}
</script>

<style scoped>
</style>
