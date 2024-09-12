<template>
  <div
    class="container mx-auto p-4 text-text" :class="locale === 'kh' ? 'font-KH' : 'font-ENNormal'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>
