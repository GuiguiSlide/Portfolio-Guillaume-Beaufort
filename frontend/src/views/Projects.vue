<script setup lang="ts">
const handleClick = () => {
    window.location.href = '/contact';
}
const projects = [
  {
    title: "Portfolio",
    description: "Mon portfolio en Vue + Tailwind + NodeJS + Typescript + Express",
    link: "https://github.com/GuiguiSlide/Portfolio-Guillaume-Beaufort",
  },
  {
    title: "Minilib",
    description:
      "Faire un site avec un librairie pour exemple pour apprendre le nodeJS + typescript + Express + postgreSQL + docker",
    link: "https://github.com/GuiguiSlide/Minilib-Guillaume-Beaufort",
  },
  {
    title: "ChessPython",
    description:
      "Un jeu d'échecs développé en Python avec ursina en utilisant l'algorithme Minimax pour l'IA. + l'utilisation de Blender pour les modèles 3D",
    link: "https://github.com/GuiguiSlide/ChessPython",
  },
  {
    title: "AquaPunk",
    description:
      "Projet collaboratif de Tower Defense en Godot en 3D dans un univers aquatique développé pour la GameJam du Cesi en 2025",
    link: "https://github.com/GuiguiSlide/GuiguiSlide-projet_gamejam_2025_cesi",
  },
  {
    title: "site web cuisine",
    description:
      "Un site web pour trouver des recettes par rapport aux produits en stock, développé en Svelte, TailwindCSS et NodeJS avec une base de données PostgreSQL",
    link: "https://github.com/GuiguiSlide/siteweb_cuisine",
  },
  {
    title: "Untrustpilot",
    description:
      "Projet collaboratif pour tester vos connaissances en cybersecurité, j'ai fait le Frontend en Svelte et TailwindCSS",
    link: "https://github.com/GuiguiSlide/GuiguiSlide-Untrustpilot",
  },
  {
    title: "Station Météo",
    description:
      "Projet collaboratif Arduino+HTML+CSS+JS: projet station météo projeté sur un site depuis une machine programmée en Arduino",
    link: "https://github.com/GuiguiSlide/Station_m-t-o",
  },
  {
    title: "Cassebrique",
    description:
      "Un jeu de casse-brique développé en C avec la librairie SDL2 ma première expérience dans la programmation",
    link: "https://github.com/GuiguiSlide/GuiguiSlide-cassebrique",
  },
];
</script>

<template>
  <body class="h-full w-full bg-gradient-to-br from-gray-200 to-gray-800 p-10">
    <div class="p-10">
      <h1 class="text-3xl font-extrabold mb-6 flex justify-center">PROJETS</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 shadow-xl rounded-xl">
        <div
          v-for="project in projects"
          :key="project.title"
          class="p-6 border rounded-xl shadow hover:shadow-lg duration-300 bg-gray-200 hover:bg-gray-100 transition-all"
        >
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <p class="text-gray-800 text-lg">{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-700 font-bold"
          >
            Voir le projet
          </a>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="mt-10 px-10 py-2 bg-orange-500 hover:bg-orange-200 rounded-lg transition-colors" @click="handleClick">
          me contacter
        </button>
      </div>
    </div>
  </body>
</template>
