<!-- @format -->

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <router-link class="router-link" to="/">Home</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <router-link to="/login">Login</router-link> 
            <template #button-content>
              <em>User</em>
              <router-link to="/login">Login</router-link>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
          <b-nav-item href="#" v-if="isLoggedIn">
            <router-link class="router-link" @click="logout"
              >Logout</router-link
            >
          </b-nav-item>
          <b-nav-item href="#" v-else>
            <router-link class="router-link" to="/login">Login</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters(['isLoggedIn']),
  methods: {
    async logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
.router-link {
  color: #fff;
  text-decoration: none;
}
</style>
