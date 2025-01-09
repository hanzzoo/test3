export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      cdnURL: '/test3/' //a
    },
  },
  app: {
    baseURL: '/test3/' //b
  },
});
