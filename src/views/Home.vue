<template>
  <div class="home">
    <h1>Trade or View your Portfolio</h1>
    <h6>You may save or load your data</h6>
    <h6>Click on 'END Day' to beign a new day</h6>
    <hr>
    <p>Your Funds : {{funds | currency}} </p>
  </div>
</template>

<script>
export default {
  name: "home",
  computed : {
    funds () {
      return this.$store.getters.funds;
    }
  }
};
</script>
