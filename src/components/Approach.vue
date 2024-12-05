<template>
  <div class="bg-myDarkGreen mb-10">
    <!-- toDo: approach divid to some components -->
    <h2 class="text-myMediumGreen text-4xl -ml-12 mb-24">Our approach</h2>
    <div class="mb-28">
      <div class="text-white text-5xl ml-5 mb-9">1. License content</div>
      <div class="flex items-start justify-between">
        <img :src="publisherUrl" alt="publisher" />
        <img :src="arrowUrl" alt="arrow" class="ml-[250px] mt-12" />
        <div class="text-2xl w-2/5">
          <div class="text-myMediumGreen mb-5">Publisher & Content Creator</div>
          <div class="text-myLightGreen">
            Protect content from unathorised usage, define licensing conditions
            and streamlined licensing to AI-providers.
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center my-10">
        <img class="mr-[120px] mb-10 w-24" :src="connectorDownUrl" />
        <img class="ml-[120px] w-24" :src="connectorUpUrl" />
      </div>
      <div class="flex justify-between items-end">
        <div class="text-2xl w-2/5">
          <div class="text-myMediumGreen mb-5">AI-Providers</div>
          <div class="text-myLightGreen">
            API-access to high-quality and mashine-readable data from verified
            sources and compliance by design.
          </div>
        </div>
        <img :src="arrowUrl" alt="arrow" class="mb-10 rotate-180" />
        <!-- rotate -->
        <img :src="humanConnector" alt="human-connector" />
      </div>
    </div>
    <div>
      <div class="text-white text-5xl ml-5 mb-9">2. Validate content</div>
      <div class="flex mb-20">
        <div>
          <div
            v-for="item in validateContextAttributes"
            :key="item.id"
            class="flex text-2xl w-4/5 h-screen"
          >
            <div class="text-myMediumGreen -ml-[70px]">{{ item.id }}</div>
            <div class="text-myLightGreen ml-14">{{ item.text }}</div>
          </div>
        </div>
        <div  class="">
          <img
            :src="validateArticle"
            alt="validet-article"
            class="sticky top-60 m-w-[360px]"
          />
        </div>
      </div>
      <div class="flex mb-40">
        <div>
          <img :src="validateArticle" alt="validet-article" class="sticky top-60 m-w-[360px]"/>
        </div>
        <div>
          <div v-for="item in validateContextTopics" :key="item.id" class="flex justify-start flex-row-reverse items-start">
            <div  class="flex flex-col text-2xl w-7/12 h-screen">
              <div class="text-myMediumGreen mb-3">{{ item.header }}</div>
              <div class="text-myLightGreen">{{ item.text }}</div>
            </div>
            <img :src="arrowUrl" alt="image" class="mt-10 mr-10"/>
          </div>
        </div>
      </div>
      <p class="text-white text-6xl max-w-4xl mb-24">
        Valid increases the visibility and enables the verification of digital
        content
      </p>
      <div>
        <div v-for="item in validateTabels" :key="item.id" class="flex justify-between border-b-2 border-myMediumGreen text-2xl py-10 last:border-none">
          <span class="text-myMediumGreen">{{ item.title }}</span>
          <span class="text-myLightGreen w-1/2">{{ item.text }}</span>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Approach",
  data() {
    return {
      publisherUrl: require("@/images/approach/publisher.svg"),
      arrowUrl: require("@/images/approach/arrow.svg"),
      connectorUpUrl: require("@/images/approach/connector-up.svg"),
      connectorDownUrl: require("@/images/approach/connector-down.svg"),
      humanConnector: require("@/images/approach/human-connector.svg"),
      validateArticle: require("@/images/approach/validate-articles.svg"),
      validateContextAttributes: [
        {
          id: "01",
          text: "Valid increases transparency and enables the verification of digital content.",
        },
        {
          id: "02",
          text: "The validated content is visible across platforms (e.g. news site, social media, search engine).",
        },
        {
          id: "03",
          text: "Internet users can easily verify the provenance of information and check whether the content has been altered.",
        },
      ],
      validateContextTopics: [
        {
          id: 1,
          header: "Cryptographic signatures",
          text: "The publishing medium (e.g. daily newspaper) and the author sign the content with a cryptographic signature.",
        },
        {
          id: 2,
          header: "Blockchain entry ",
          text: "The content is stored on the blockchain and remains immutable and transparent.",
        },
        {
          id: 3,
          header: "Article information",
          text: "The provenance of the content can be verified by the user with the help of signatures and metadata.",
        },
      ],
      validateTabels: [
        {
          id: 1,
          title: "Users",
          text: "Content from trustworthy sources instead of disinformation",
        },
        {
          id: 2,
          title: "Content creators",
          text: "Improve content visibility and increase trust",
        },
        {
          id: 3,
          title: "Third parties and plattforms",
          text: "Effective and scalable measure to fight disinformation and ensure compliance with new legislation",
        },
      ],
    };
  },
};
</script>
