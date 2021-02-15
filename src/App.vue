<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/login">Login</router-link> | -->
    </div>
    <router-view />
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "App",
  components: {},
  // async mounted() {
  //   const { data } = await axios("http://localhost:5000/api/users");
  //   console.log(data);
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
