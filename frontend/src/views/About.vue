<template>
  <div class="h-screen flex items-center flex-col">
    <div class="bg-gradient-to-r from-purple-100 to-pink-500 rounded-b-lg p-10 text-center h-full w-full">
      <h1 class="text-6xl font-bold">À propos</h1>
      <p class="mt-10 text-2xl mb-10">
        Je m'appelle Guillaume Beaufort, je suis étudiant en conception et développement d'applications, avec une solide expérience dans les technologies suivantes :
      </p>
      
      <div class="flex items-center justify-center gap-4 mb-10">
        <button @click="prevSlide" class="px-4 py-2 bg-white text-purple-500 rounded-lg font-bold">❮</button>
        <div class="w-64 h-32 flex items-center justify-center">
          <img :src="languages[currentIndex].logo" :alt="languages[currentIndex].name" class="h-full object-contain">
        </div>
        <button @click="nextSlide" class="px-4 py-2 bg-white text-purple-500 rounded-lg font-bold">❯</button>
      </div>
      
      <p class="text-xl font-semibold mb-10">{{ languages[currentIndex].name }}</p>
      
      <div class="flex justify-center gap-2 mb-10">
        <button 
          v-for="(_lang, index) in languages"
          :key="index"
          @click="currentIndex = index"
          :class="['w-2 h-2 rounded-full', index === currentIndex ? 'bg-white' : 'bg-white/50']"
        ></button>
      </div>
      
      <button class="mt-10 px-10 py-2 bg-orange-500 rounded-lg" @click="handleClick">
        Voir mes projets
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Language {
  name: string
  logo: string
}

const languages = ref<Language[]>([
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Vue.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
  { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'Flutter', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Flutter-logo.png' },
  { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
  { name: 'Linux', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg' },
  { name: 'Blender', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg' },
])

const currentIndex = ref(0)
let slideInterval: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % languages.value.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + languages.value.length) % languages.value.length
}

const handleClick = () => {
    window.location.href = '/projects';
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 3000)
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

<style scoped>
</style>

