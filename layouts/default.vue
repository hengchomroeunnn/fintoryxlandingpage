<template>
  <div>
    <SpeedInsights />
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
