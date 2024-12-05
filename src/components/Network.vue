<template>
  <div class="mb-20">
    <h3 class="text-myMediumGreen text-4xl mb-10 -ml-12">Our Network</h3>
    <div class="flex justify-between">
      <div v-for="item in networks" :key="item.id">
        <img :src="item.imgUrl" :alt="item.imgAlt" height="120px" width="200px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Network",
  data() {
    return {
      networks: [
        {
          id: 1,
          imgUrl: require("@/images/Network/europien-blockchain.svg"),
          imgAlt: "Europian Blockchain Center",
        },
        {
          id: 2,
          imgUrl: require("@/images/Network/world-associaion.svg"),
          imgAlt: "World Assoiaion of News Publishers",
        },
        {
          id: 3,
          imgUrl: require("@/images/Network/signatory.svg"),
          imgAlt: "Signatory of the Code of practice on Disinformation",
        },
        {
          id: 4,
          imgUrl: require("@/images/Network/media-lab.svg"),
          imgAlt: "Media Lab Bayern",
        },
      ],
    };
  },
};
</script>
