<template>
  <div
    class="container mx-auto p-4 text-text"
    :class="locale === 'kh' ? 'font-KH' : 'font-ENNormal'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

useHead({
  title: "Fintory - Mobile POS System for Convenience Stores & SMEs",
  meta: [
    { name: "description", content: "Fintory is a cloud-based mobile POS system designed for convenience stores and SMEs in Cambodia. Manage sales, inventory, invoicing, payments, and more, all in one app." },
    { name: "keywords", content: "Fintory, mPOS, mobile POS, convenience store, SMEs, Cambodia, inventory management, sales processing, invoicing, payment integration, FlutterFlow" },
    { name: "author", content: "Fintory Team, JR & Puthek" },
    { name: "robots", content: "index,follow" },
    { property: "og:title", content: "Fintory - Mobile POS System for Convenience Stores & SMEs" },
    { property: "og:description", content: "Fintory is the ultimate mobile POS solution for convenience stores and SMEs in Cambodia. Cloud-based, with offline capabilities, multi-branch management, and AI-powered forecasting." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://fintory-nu.vercel.app" },
    { property: "og:image", content: "https://fintory-nu.vercel.app/_nuxt/FintoryLogo.BBvc8uZu.png" }
  ],
  bodyAttrs: {
    class: "fintory-body",
  },
  script: [{ innerHTML: "console.log('Welcome to Fintory!')" }],
});

</script>
