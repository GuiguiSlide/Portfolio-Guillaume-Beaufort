<script setup>
const scrollToProjects = () => {
  const projectsElement = document.getElementById("projects");
  if (projectsElement) {
    projectsElement.scrollIntoView({ behavior: "smooth" });
  }
};
const handleClick = () => {
  window.location.href = "/about";
};
</script>

<template>
  <body class="h-full w-full bg-gradient-to-br to-blue-200 from-white p-10">
    <div class="flex flex-col items-center justify-center mt-[25%] mb-[40%] text-center">
      <h1 class="text-[2.5rem] font-bold">Guillaume Beaufort</h1>
      <p class="text-[1.25rem] text-gray-600">
        Développeur et Concepteur D'applications.
      </p>
      <div class="flex justify-center items-end">
        <button
          @click="scrollToProjects"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full mt-[8rem] inline-flex items-center justify-center animate-bounce"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 m-4">
      <img
        src="https://github.com/GuiguiSlide/GuiguiSlide-cassebrique/raw/main/image.png"
        id="projects"
        class="w-full h-full object-cover"
        alt="image de cassebrique"
      />
      <img
        src="https://github.com/GuiguiSlide/GuiguiSlide-station_m-t-o/raw/main/picture%201.png"
        class="w-full h-full object-cover"
        alt="image de station météo"
      />
      <img
        src="https://github.com/GuiguiSlide/Untrustpilot/raw/main/imgs/screenshotunstrustpilot2.png"
        class="w-full h-full object-cover"
        alt="image de untrustpilot"
      />
      <img
        src="https://github.com/GuiguiSlide/projet_gamejam_2025_cesi/raw/main/imgs/towers.png"
        class="w-full h-full object-cover"
        alt="image de tower defense"
      />
      <img
        src="https://github.com/GuiguiSlide/chesspython/raw/main/images/screenshotmulti.png"
        class="w-full h-full object-cover"
        alt="image de chesspython"
      />
      <img
        src="https://github.com/GuiguiSlide/minilib-guillaume-beaufort/raw/main/images/screenshot.png"
        class="w-full h-full object-cover"
        alt="image de minilib"
      />
    </div>
    <div class="flex justify-center items-center mb-[8rem]">
      <button class="p-8 mt-10 px-10 py-2 bg-orange-500 rounded-lg" @click="handleClick">
        Plus d'infos sur moi
      </button>
    </div>
  </body>
</template>
