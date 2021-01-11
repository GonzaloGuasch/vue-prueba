<template>
  <div>
    <router-view>
      <NavBar />
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
  }
}
</script>

<style>

</style>
