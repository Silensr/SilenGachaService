// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    githubClientId: "",
    githubClientSecret: "",

    discordClientId: "",
    discordClientSecret: "",
    discordCallbackUri: ""
  }
})
