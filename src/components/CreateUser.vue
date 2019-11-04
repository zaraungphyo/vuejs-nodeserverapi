/* eslint-disable handle-callback-err */
<template>
  <div id="container" class="container">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <div class="alert alert-warning" v-show="showError">
          <button type="button" class="close" @click="hideMessage()">X</button>
          <strong>Error!</strong>
        </div>
        <h1>Register</h1>

        <div class="login-form info-form">
          <form @submit="createUser">
            <p class="h4 text-center mb-4">Sign up</p>
            <label for="name" class="grey-text">Your name</label>
            <input type="text" v-model="user.name" id="name" class="form-control" />
            <br />
            <label for="dob" class="grey-text">DOB</label>
            <input type="date" v-model="user.dob" id="dob" class="form-control" />
            <br />
            <label for="email" class="grey-text">Email</label>
            <input type="email" v-model="user.email" id="email" class="form-control" />
            <br />
            <label for="pass" class="grey-text">Password</label>
            <input type="password" v-model="user.password" id="pass" class="form-control" />
            <br />
            <div class="text-center mt-4">
              <button class="btn btn-default btn-unique" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { APIService } from '../api-service'

// const apiService = new APIService()

export default {
  components: {},

  data () {
    return {
      showError: false,
      user: {}
    }
  },

  methods: {
    createUser (evt) {
      evt.preventDefault()
      this.$store
        .dispatch('register', this.user)
        .then(() => this.$router.push('/products'))
        .catch(err => console.log(err))
    }
  },

  mounted () {}
}
</script>
<style scoped>
.login-form {
  width: 340px;
  margin: 50px auto;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
</style>
