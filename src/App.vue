<template>
  <div id="app">
    <!-- <header>
      <span>Vue.js PWA</span>
    </header>-->
    <main>
      <mdb-navbar color="success-color-dark" dark>
        <mdb-navbar-brand href="https://mdbootstrap.com/">ZAR AUNG PHYO</mdb-navbar-brand>
        <mdb-navbar-toggler>
          <mdb-navbar-nav>
            <mdb-nav-item href="#" v-if="!isLoggedIn">
              <router-link to="/">Log In</router-link>
            </mdb-nav-item>
            <mdb-nav-item href="#" active v-if="isLoggedIn">
              <router-link to="products">Home</router-link>
            </mdb-nav-item>
            <mdb-nav-item href="#" v-if="isLoggedIn">
              <router-link to="addproduct">Add Product</router-link>
            </mdb-nav-item>
            <mdb-nav-item href="#" v-if="isLoggedIn">
              <router-link to="account">My Account</router-link>
            </mdb-nav-item>
            <mdb-nav-item href="#">
              <router-link to="contactus">Contact Us</router-link>
            </mdb-nav-item>
            <mdb-nav-item href="#">
              <router-link to="career">Career</router-link>
            </mdb-nav-item>
            <mdb-nav-item href="#">
              <router-link to="aboutus">About Us</router-link>
            </mdb-nav-item>
            <mdb-nav-item href="#" v-if="isLoggedIn">
              <a @click="logout">Logout</a>
            </mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA" /> -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem
} from 'mdbvue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
export default {
  name: 'app',
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn
    }
  },
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  },
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
.navbar-link > a {
  color: white !important;
}
</style>
