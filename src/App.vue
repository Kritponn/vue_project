<template>
  <div>
    <!-- Navigácia -->
    <nav class="navbar navbar-expand-lg navbar-custom">
  <div class="container">
    <router-link class="navbar-brand" to="/">Virtuálna Komunita</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Domov</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/events">Udalosti</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/shop">Obchod</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            Košík <i class="bi bi-cart"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

</style>
