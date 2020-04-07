<template>
  <header class="mb-3">
    <nav class="navbar navbar-expand-lg rounded border navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>

        <ul class="navbar-nav mr-auto">
          <router-link active-class="active" to="/portfolio" tag="li">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link active-class="active" to="/stocks" tag="li">
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button class="btn btn-link nav-link" @click="endDay">End Day</button>
          </li>
          <li class="nav-item dropdown" @click="isDropdownOpen = !isDropdownOpen">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div
              class="dropdown-menu"
              :class="{show : isDropdownOpen}"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item" href="#" @click="saveData">Save</a>
              <a class="dropdown-item" href="#" @click="loadsData">Load</a>
            </div>
          </li>
          <li class="nav-item d-flex align-items-center">
            <strong class="ml-1">Funds : {{funds | currency}}</strong>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app-header",
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        stocks: this.$store.getters.stocks,
        stocksPortfolio: this.$store.getters.stocksPortfolio,
        funds: this.$store.getters.funds
      };
      // localStorage.removeItem("data");
      localStorage.setItem("data", JSON.stringify(data));
    },
    loadsData () {
      this.loadData();
    }
  }
};
</script>

<style>
</style>