<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header text-white bg-success">
        <span class="text-capitalize mr-2">{{stock.name}}</span>
        <small>(Price : {{stock.price}})</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6">
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              class="form-control mr-3"
              v-model="quantity"
              :class="danger"
            />
          </div>
          <div class="col">
            <div class="float-right">
              <button
                class="btn btn-success"
                :disabled="insufficientFunds || quantity <= 0 || Number.isInteger(quantity)"
                @click="buyStock"
              >{{ insufficientFunds ? "No Funds" : "BUY"}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "stocks-stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapGetters(["funds"]),
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
    danger() {
      return {
        border: this.insufficientFunds,
        "border-danger": this.insufficientFunds
      };
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      // console.log(order)
      this.$store.dispatch("buyStocks", order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>