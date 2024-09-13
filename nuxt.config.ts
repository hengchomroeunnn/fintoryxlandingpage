import { config } from "dotenv";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
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
