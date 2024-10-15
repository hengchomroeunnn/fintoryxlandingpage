import { config } from "dotenv";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Fintory - Mobile POS System",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Fintory is a cloud-based mobile POS system...",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, // Favicon in public directory
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/vue-scrollto.js", "~/plugins/firebase.js"],
  modules: ["@nuxtjs/i18n", "@nuxt/icon", "nuxt-vuefire"],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: false,
    },
    config: {
      apiKey: "AIzaSyBD_pILvWIrotuQZwe20joZDoYMWCWP3yg",
      authDomain: "fintoryemail.firebaseapp.com",
      projectId: "fintoryemail",
      storageBucket: "fintoryemail.appspot.com",
      messagingSenderId: "374688381548",
      appId: "1:374688381548:web:77d7821b0da7cada583649",
      measurementId: "G-YCSNM86PFK",
    },
  },
});
