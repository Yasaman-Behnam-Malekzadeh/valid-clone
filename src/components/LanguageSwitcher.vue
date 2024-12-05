<template>
  <div class="flex items-center">
    <button @click="toggleLanguage" class="flex items-center">
      <img
        :src="currentLocale === 'en' ? englishUrl : deutschUrl"
        alt="translate log"
        class="w-10 h-10"
      />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLocale: "en",
      deutschUrl: require("@/images/header/de.svg"),
      englishUrl: require("@/images/header/en.svg"),
    };
  },
  methods: {
    toggleLanguage() {
      this.currentLocale = this.currentLocale === "en" ? "de" : "en";
      this.$i18n.locale = this.currentLocale;
    },
  },
};
</script>
