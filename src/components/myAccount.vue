<template>
  <div class="login-form">
    <h2>My Account</h2>
    <b-form>
      <b-form-group id="input-group-1" label="Name:">
        <b-form-input id="input-1" v-model="user.name" type="text"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Date of Birth:">
        <b-form-input id="input-1" v-model="user.dob" type="text"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
    </b-form>
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
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))
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
