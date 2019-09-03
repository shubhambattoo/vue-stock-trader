<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header
  },
  created() {
    this.$store.dispatch('initStocks');
  }
};
</script>

<style>
body {
  padding: 30px;
}
</style>
