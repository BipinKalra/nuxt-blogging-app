export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "my-blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://unpkg.com/@coding-blocks/motley@2.8.0/dist/coding-blocks/app.min.css"
      }
    ]
  },

  loading: {
    color: "#f26a3e",
    height: "4px",
    duration: 5000
  },

  // Works in case of a SPA
  loadingIndicator: {
    name: "circle",
    color: "#f26a3e"
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios"],

  // When @nuxtjs/axios module is installed, the object below can be used to configure axios requests
  axios: {
    // This baseURL config can thus now be done in 2 ways!
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blog-26316-default-rtdb.europe-west1.firebasedatabase.app"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blog-26316-default-rtdb.europe-west1.firebasedatabase.app"
  },

  transition: {
    name: "fade",
    mode: "out-in"
  }
};
