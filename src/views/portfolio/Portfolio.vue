<template>
  <div class="portfolio">
    <div class="row">
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </div>
  </div>
</template>

<script>
import Stock from "@/components/portfolio/Stock.vue";
export default {
  computed: {
    stocks() {
      return this.$store.getters.stocksPortfolio;
    }
  },
  components: {
    Stock
  }
};
</script>

<style>
</style>