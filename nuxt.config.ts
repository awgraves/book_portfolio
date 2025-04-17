// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  devServer: {
    port: 4000,
  },
  typescript: {
    typeCheck: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["nuxt-svgo", "@nuxt/eslint", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Works by Andrew Graves",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Special+Elite&display=swap",
        },
      ],
    },
  },
});
