module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    "quote-props": ["error", "as-needed"],
    // Vue
    "vue/multi-word-component-names": 0,
    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": 0,
  },
};
