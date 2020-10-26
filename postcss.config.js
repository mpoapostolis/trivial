module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: [
              "./node_modules/megadraft/dist/**/*.css",
              "./components/**/*.tsx",
              "./pages/**/*.tsx",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
};
