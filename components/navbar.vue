<!-- components/Navbar.vue -->
<template>
  <nav class="sticky top-0 z-50 bg-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="w-[100px]">
        <img src="/assets/images/FintoryLogo.png" alt="logo" />
      </NuxtLink>
      <div class="">
        <ul
          class="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center">
          <li>
            <NuxtLink to="#about-us" class="hover:text-primary">{{
              $t("about_us")
            }}</NuxtLink>
          </li>
          <li class="flex hover:text-primary items-center">
            <NuxtLink to="#features" class="">{{ $t("features") }}</NuxtLink>
            <Icon name="ic:round-expand-more" size="24px"></Icon>
          </li>
          <li>
            <NuxtLink to="#pricing" class="hover:text-primary">{{
              $t("pricing")
            }}</NuxtLink>
          </li>
          <li class="flex hover:text-primary items-center">
            <NuxtLink to="#whyfintory" class="">{{
              $t("why_fintory")
            }}</NuxtLink>
            <Icon name="ic:round-expand-more" size="24px"></Icon>
          </li>
          <li>
          <!-- Conditionally show the current flag -->
          <div @click="toggleLocale" class="cursor-pointer">
            <Icon :name="currentFlag" size="36px" />
          </div>
        </li>
          <div></div>
          <li>
            <div class="bg-primary rounded-full p-2">
              <div class="text-white m-2">{{ $t('schedule_demo') }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

// Define flag icons for each locale
const flags = {
  en: 'twemoji:flag-united-states',
  kh: 'twemoji:flag-cambodia'
}

// Computed property to get the current flag based on the locale
const currentFlag = computed(() => flags[locale.value])

// Function to toggle between locales
function toggleLocale() {
  locale.value = locale.value === 'en' ? 'kh' : 'en'
}
</script>
