<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Navbar</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
              Product
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/productList">Product List</router-link></li>
              <!-- sample detail: product id = p100 -->
              <li><router-link class="dropdown-item"
                    :to="{ name: 'product.detail', params: { id: 'p100' } }">
                    Product Detail
                  </router-link></li>
            </ul>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup></script>
