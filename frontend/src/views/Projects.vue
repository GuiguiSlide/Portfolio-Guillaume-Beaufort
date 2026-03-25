<script setup lang="ts">
const projects = [
  {
    title: "Portfolio",
    description: "Mon portfolio en Vue + Tailwind + NodeJS + Typescript + Express",
    link: "https://github.com/GuiguiSlide/Portfolio-Guillaume-Beaufort"
  },
  {
    title: "API Node",
    description: "Backend avec Express + TypeScript",
  }
]
</script>

<template>
  <div class="p-10">
    <h1 class="text-3xl font-bold mb-6">Projects</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div 
        v-for="project in projects" 
        :key="project.title"
        class="p-6 border rounded-xl shadow"
      >
        <h2 class="text-xl font-bold">{{ project.title }}</h2>
        <p class="text-gray-600">{{ project.description }}</p>
        <a 
          :href="project.link" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-blue-500 hover:text-blue-700"
        >
          Voir le projet
        </a>
      </div>
    </div>
  </div>
</template>