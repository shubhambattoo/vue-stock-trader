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
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Save</a>
              <a class="dropdown-item" href="#">Load</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "app-header"
};
</script>

<style>
</style>