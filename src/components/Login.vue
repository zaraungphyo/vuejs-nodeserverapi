<template>
  <div class="login-form info-form">
    <form @submit="login">
      <h2 class="text-center">Log in</h2>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          v-model="user.email"
          placeholder="Email"
          required="required"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          v-model="user.password"
          placeholder="Password"
          required="required"
        />
      </div>
      <div class="form-group">
        <button type="submit" @click="login()" class="btn btn-primary btn-block">Log in</button>
      </div>
    </form>
    <p class="text-center">
      <router-link to="register">Create an Account</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showError: false,
      user: {}
    }
  },
  methods: {
    login (evt) {
      evt.preventDefault()
      this.$store
        .dispatch('login', this.user)
        .then(() => this.$router.push('/products'))
        .catch(err => console.log(err))
    }
  }
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
