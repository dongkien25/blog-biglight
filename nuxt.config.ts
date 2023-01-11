// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      script: [
        {
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=622221636129936&autoLogAppEvents=1",
          nonce: "VCN1dluA",
          async: true,
          defer: true,
          crossorigin: "anonymous",
        },
      ],
    },
  },
});
