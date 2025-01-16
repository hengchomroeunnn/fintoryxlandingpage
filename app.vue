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

export default {
  mounted() {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8108895822236328";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  },
};


</script>
