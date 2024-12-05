<template>
  <div class="flex flex-col border-2 rounded-xl border-myMediumGreen w-96 p-7">
    <img :src="data.imgUrl" :alt="data.imgAlt" class="w-full h-72 mb-4" />
    <div
      v-html="data.text"
      class="text-2xl leading-9 text-myLightGreen min-h-36"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ContextItem",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
