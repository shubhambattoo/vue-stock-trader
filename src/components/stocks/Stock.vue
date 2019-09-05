<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card">
      <div class="card-header text-white bg-success">
        <span class="text-capitalize mr-2">{{stock.name}}</span> 
        <small>(Price : {{stock.price}})</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              class="form-control mr-3"
              v-model="quantity"
            />
          </div>
          <div class="col-sm-4">
            <div class="float-right">
              <button 
                class="btn btn-success" 
                :disabled="quantity <= 0 || Number.isInteger(quantity)" 
                @click="buyStock"
              >BUY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'stocks-stock',
  props : ['stock'],
  data () {
    return {
      quantity : 0
    }
  },
  methods : {
    buyStock () {
      const order = {
        stockId : this.stock.id,
        stockPrice : this.stock.price,
        quantity : this.quantity
      }
      // console.log(order)
      this.$store.dispatch("buyStocks", order)
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>