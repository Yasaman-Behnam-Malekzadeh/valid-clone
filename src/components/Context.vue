<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex justify-between items-center ml-12 min-h-screen">
      <h1 class="text-white text-8xl w-3/6">
        Validate and license digital content
      </h1>
      <p class="text-2xl w-2/6 text-myLightGreen">
        Licence content from trusted sources securely and easily using
        innovative technology.
      </p>
    </div>
    <a
      href="#context"
      class="flex items-center justify-end text-lg w-full absolute bottom-10 right-10"
    >
      <span class="mr-8 text-myLightGreen">Learn more</span>
      <img :src="arrowUrl" alt="Green circle with arrow down icon " />
    </a>
    <div
      class="flex items-center justify-between w-full min-h-screen mx-[50px]"
      id="context"
    >
      <ContextItem v-for="item in contextItems" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import ContextItem from "./ContextItem.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Context",
  data() {
    return {
      arrowUrl: require("@/images/context/circle.svg"),
      contextItems: [
        {
          id: 0,
          imgUrl: require("@/images/context/brain.svg"),
          imgAlt: "brain",
          text: `By 2026, <span class="text-myMediumGreen">90%</span> of all content will be generated with AI and more than 250M companies will rely on AI.`,
        },
        {
          id: 1,
          imgUrl: require("@/images/context/veracity-check.svg"),
          imgAlt: "circle",
          text: `At the same time, <span class="text-myMediumGreen">high-quality data</span> required for training AI models is exhausted.`,
        },
        {
          id: 2,
          imgUrl: require("@/images/context/scale.svg"),
          imgAlt: "scale",
          text: `The <span class="text-myMediumGreen">EU AI Act</span> requires transparency in the procurement and use of data.`,
        },
      ],
      contextVisible: false,
    };
  },
  components: {
    ContextItem,
  },
  methods: {
    scrollToContext() {
      const contextElement = document.getElementById("context");
      if (contextElement) {
        this.contextVisible = true;
        contextElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
