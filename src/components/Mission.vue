<template>
    <div class="mb-20">
      <h2 class="text-myMediumGreen text-4xl mb-10 -ml-12">Our mission</h2>
      <div class="flex">
        <div class="flex item-center flex-col">
          <p class="text-white text-6xl mb-10">Trustworthy content</p>
          <p class="text-myLightGreen text-2xl w-3/5">
            We consider the free and public exchange of opinions to be one of
            the most important cornerstones of our democracy. With Valid, we
            want to contribute to a trustful dialogue in our society.
          </p>
        </div>
        <img :src="imgUrl" alt="mission" class="w-5/6"/>
      </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Mission",
  data() {
    return {
      imgUrl: require("@/images/mission/mission.svg"),
    };
  },
};
</script>
