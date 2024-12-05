<template>
  <div class="flex items-center justify-between bg-myMediumDarkGreen h-[100px] px-10">
    <div class="flex text-white">
      <div class="flex items-center mr-10 text-xs" v-for="item in footerNav" :key="item.id">
        <a :href="item.url">
          {{ item.name }}
        </a>
      </div>
    </div>
    <div class="text-myLightGreen text-xs">© 2024 Valid</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data() {
    return {
      footerNav: [
        {
          id: 1,
          name: "Legal Notice",
          url: "#",
        },
        {
          id: 2,
          name: "Privacy Notice",
          url: "#",
        },
        {
          id: 3,
          name: "Contact",
          url: "#",
        },
      ],
    };
  },
};
</script>
