<template>
  <div class="row">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </div>
</template>

<script>
import Stock from '@/components/stocks/Stock.vue';

export default {
  name: "stocks",
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: "facebook",
          price: 20
        },
        {
          id: 2,
          name: "apple",
          price: 2000
        },
        {
          id: 3,
          name: "google",
          price: 500
        },
        {
          id: 4,
          name: "uber",
          price: 750
        }
      ]
    };
  },
  components : {
    Stock
  }
};
</script>

<style>
</style>