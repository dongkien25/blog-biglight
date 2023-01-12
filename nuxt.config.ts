// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      script: [
        {
          async: true,
          defer: true,
          crossorigin: "anonymous",
          src: "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0&appId=622221636129936&autoLogAppEvents=1",
          nonce: "jVhTL6gq",
        },
      ],
    },
  },
});
