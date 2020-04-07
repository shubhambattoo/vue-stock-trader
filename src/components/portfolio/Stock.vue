<template>
  <div class="port-stock col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header text-white bg-info">
        <span class="text-capitalize mr-2">{{stock.name}}</span>
        <small>(Price : {{stock.price}} | Quantity : {{stock.quantity}})</small>
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
                class="btn btn-info"
                :disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)"
                @click="sellStock"
              >{{ insufficientQuantity ? "Invalid Quantity" : "SELL"}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stocks-stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed : {
    insufficientQuantity () {
      return this.quantity > this.stock.quantity
    },
    danger() {
      return {
        border: this.insufficientQuantity,
        "border-danger": this.insufficientQuantity
      };
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };
      this.$store.dispatch("sellStock", order);
      this.quantity = null;
    }
  }
};
</script>

<style>
</style>