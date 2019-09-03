<template>
  <div class="row">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from "@/components/stocks/Stock.vue";

export default {
  name: "stocks",
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style>
</style>