<template>
  <div class="navbar-container">
    <router-link to="/">Home</router-link>
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 120px;
    background-color: #41b883;
    color: #35495e;
    font-size: 20px;
  }
</style>