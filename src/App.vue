<template>
  <div id="app">
    <ResponsiveVoice></ResponsiveVoice>
  </div>
</template>

<script>
import ResponsiveVoice from "./components/ResponsiveVoice.vue";

export default {
  name: "app",
  components: {
    ResponsiveVoice
  }
};
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
