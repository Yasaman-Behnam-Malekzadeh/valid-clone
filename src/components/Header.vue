<template>
  <div
    class="flex flex-row justify-between items-center py-14 px-10 fixed z-50 w-full bg-myDarkGreen"
  >
    <img :src="logoUrl" alt="valid-logo" class="w-52" />
    <div class="flex flex-row items-center">
      <div class="flex flex-row mr-28 text-lg">
        <a href="#context" class="text-white mr-8">Context</a>
        <a href="#approach" class="text-white mr-8">Our approach</a>
        <a href="#mission" class="text-white mr-8">Our mission</a>
        <LanguageSwitcher />
      </div>
      <a href="mailto:info@valid.tech" class="px-12 py-3 rounded-full bg-myMediumGreen">Contact</a>
    </div>
  </div>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      logoUrl: require("@/images/header/download.svg"),
    };
  },
  components: {
    LanguageSwitcher,
  },
};
</script>
