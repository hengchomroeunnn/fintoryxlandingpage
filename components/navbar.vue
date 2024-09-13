<!-- components/Navbar.vue -->
<template>
  <nav class="sticky top-0 z-50 bg-white p-4">
    <div
      class="container mx-auto flex min-lg:items-center justify-between max-sm:text-[16px]">
      <!-- Logo -->
      <NuxtLink to="/" class="">
        <img
          src="/assets/images/FintoryLogo.png"
          alt="logo"
          class="max-sm:w-[60px] max-lg:w-[70px] max-2xl:w-[100px] w-[100px]" />
      </NuxtLink>

      <!-- Hamburger Menu for Mobile -->
      <div class="flex flex-col max-md:items-end">
        <!-- Hamburger Menu for Mobile -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden focus:outline-none">
          <Icon
            :name="menuOpen ? 'ic:round-close' : 'ic:round-menu'"
            size="24px" />
        </button>

        <!-- Menu Items -->
        <div
          :class="menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
          class="transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible md:flex md:max-h-full md:opacity-100 md:space-x-8 items-center">
          <ul
            class="  flex flex-col md:flex-row  max-lg:space-x-6 space-x-12 space-y-2 md:space-y-0 items-center text-right max-md:items-end max-md:text-[16px] max-lg:text-[14px] text-[16px] ">
            <li>
              <NuxtLink to="#about-us" class="hover:text-primary">{{
                $t("about_us")
              }}</NuxtLink>
            </li>
            <li class="flex hover:text-primary items-center">
              <NuxtLink to="#features">{{ $t("features") }}</NuxtLink>
              
            </li>
            <li>
              <NuxtLink to="#pricing" class="hover:text-primary">{{
                $t("pricing")
              }}</NuxtLink>
            </li>
            <li class="flex hover:text-primary items-center">
              <NuxtLink to="#why_fintory">{{ $t("why_fintory") }}</NuxtLink>
         
            </li>
            <li class="flex justify-center items-center">
              <!-- Conditionally show the current flag -->
              <div
                @click="toggleLocale"
                class="cursor-pointer flex justify-center items-center">
                <Icon
                  :name="currentFlag"
                  class="max-sm:text-[20px] max-md:text-[22px] max-lg:text-[24px] max-xl:text-[26px] text-[36px]" />
              </div>
            </li>

            <li>
              <div class="bg-primary rounded-full p-2 text-white max-md:p-1">
                <a
                  href="https://calendly.com/hengchomroeun3103/30min"
                  target="_blank"
                  class="m-2"
                  >{{ $t("schedule_demo") }}</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

// Define flag icons for each locale
const flags = {
  kh: "twemoji:flag-united-states",
  en: "twemoji:flag-cambodia",
};

// Computed property to get the current flag based on the locale
const currentFlag = computed(() => flags[locale.value]);

// Function to toggle between locales
function toggleLocale() {
  locale.value = locale.value === "en" ? "kh" : "en";
}

// State to manage mobile menu visibility
const menuOpen = ref(false);
</script>

<style scoped>
/* Additional transitions and handling for menu animation */
ul {
  transition: all 0.3s ease-in-out;
}
</style>
