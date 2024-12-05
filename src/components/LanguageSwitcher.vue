<template>
  <div>
    <select v-model="currentLocale" @change="changeLanguage">
      <option value="en">En</option>
      <option value="fr">De</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLocale: "en",
      translateUrl: require("@/images/header/translate-logo.svg"),
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.currentLocale;
    },
  },
};
</script>
