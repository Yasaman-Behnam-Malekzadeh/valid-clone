<template>
  <div class="h-dvh bg-myDarkGreen">
    <Header />
    <div class="bg-myDarkGreen">
      <div class="container mx-auto">
        <Context />
        <Approach />
      <Mission />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Context from "./components/Context.vue";
import Approach from "./components/Approach.vue";
import Mission from "./components/Mission.vue";

export default {
  name: "App",
  components: {
    Header,
    Context,
    Approach,
    Mission,
  },
};
</script>
