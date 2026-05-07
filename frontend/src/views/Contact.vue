<template>
  <form
    action="https://formspree.io/f/xdabdvdb"
    method="POST"
    class="mx-auto w-full max-w-3xl px-6 py-8 bg-white rounded-3xl shadow-xl m-[100px]"
  >
    <div class="space-y-8">
      <h2 class="sr-only">Formulaire de contact</h2>

      <div>
        <p class="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Contact</p>
        <h1 class="mt-3 text-4xl font-extrabold leading-tight text-gray-900">
          Parlons, avez vous<br /><em class="font-normal italic">des questions ?</em>
        </h1>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="cf-name">Nom</label>
          <input
            class="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            id="cf-name"
            name="name"
            type="text"
            placeholder="Jean Dupont"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="cf-email">Email</label>
          <input
            class="w-full rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            id="cf-email"
            name="email"
            type="email"
            placeholder="jean@exemple.fr"
            required
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2" for="cf-subject">Sujet</label>
        <div class="relative">
          <select
            class="w-full appearance-none rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            id="cf-subject"
            name="subject"
            required
          >
            <option value="" disabled selected>Choisir un sujet…</option>
            <option>Projet freelance</option>
            <option>Collaboration</option>
            <option>Opportunité d'emploi</option>
            <option>Autre</option>
          </select>
          <span class="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
            <i class="ti ti-chevron-down" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2" for="cf-msg">Message</label>
        <textarea
          class="w-full min-h-[150px] rounded-2xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          id="cf-msg"
          name="message"
          placeholder="Décrivez votre projet ou votre demande…"
          required
        ></textarea>
      </div>

      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="text-sm text-gray-500">Je réponds généralement sous 24–48 h.</p>
        <button
          type="submit"
          class="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="cf-submit"
          :style="{ backgroundColor: buttonColor }"
          @mouseenter="startColorChange"
          @mouseleave="stopColorChange"
        >
          Envoyer
          <i class="ti ti-arrow-right ml-2" aria-hidden="true"></i>
        </button>
      </div>

      <div class="hidden rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-green-800" id="cf-success">
        <i class="ti ti-circle-check mr-2 inline-block" style="font-size: 18px" aria-hidden="true"></i>
        Message envoyé — je reviens vers vous très bientôt !
      </div>

      <div class="border-t border-gray-200"></div>

      <div class="grid gap-3 sm:grid-cols-3">
        <a class="rounded-2xl border border-gray-200 px-4 py-3 text-center text-gray-700 transition hover:border-blue-500 hover:text-blue-600" href="https://github.com/GuiguiSlide?tab=repositories">
          <i class="ti ti-brand-github mr-2" aria-hidden="true"></i>
          GitHub
        </a>
        <a class="rounded-2xl border border-gray-200 px-4 py-3 text-center text-gray-700 transition hover:border-blue-500 hover:text-blue-600" href="https://www.linkedin.com/in/guillaume-beaufort-ba252932a/">
          <i class="ti ti-brand-linkedin mr-2" aria-hidden="true"></i>
          LinkedIn
        </a>
        <a class="rounded-2xl border border-gray-200 px-4 py-3 text-center text-gray-700 transition hover:border-blue-500 hover:text-blue-600" href="mailto:guillaume.beaufort@proton.me">
          <i class="ti ti-mail mr-2" aria-hidden="true"></i>
          Email direct
        </a>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const buttonColor = ref('#2563eb')
const defaultColor = '#2563eb'
let colorInterval = null

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const startColorChange = () => {
  if (colorInterval) return
  colorInterval = setInterval(() => {
    buttonColor.value = generateRandomColor()
  }, 100)
}

const stopColorChange = () => {
  if (colorInterval) {
    clearInterval(colorInterval)
    colorInterval = null
  }
  buttonColor.value = defaultColor
}
</script>
