<template>
  <div class="login-form">
    <b-form @reset="onReset" name="myform">
      <b-form-group id="input-group-1" label="Product Name" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="prod.name"
          type="text"
          required
          placeholder="Enter Product Name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Price" label-for="input-2">
        <b-form-input id="input-2" v-model="prod.price" required placeholder="Enter price"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Quantity" label-for="input-3">
        <b-form-input id="input-3" v-model="prod.qty" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Upload Image" label-for="input-4">
        <b-form-file
          v-model="prod.image"
          @change="setImage"
          :state="Boolean(prod.image)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          id="input-4"
          name="input-4"
        ></b-form-file>
      </b-form-group>

      <b-button type="submit" @click="addprod()" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import { APIService } from '../api-service'

const apiService = new APIService()

export default {
  data () {
    return {
      showError: false,
      base64string: null,
      prod: {
        name: '',
        price: '',
        image: '',
        qty: ''
      }
    }
  },
  methods: {
    setImage: function (e) {
      var file = e.target.files[0]
      var reader = new FileReader()
      reader.onloadend = function () {
        localStorage.setItem('base64string', reader.result)
      }
      reader.readAsDataURL(file)
    },
    addprod: function (evt) {
      this.prod.image = localStorage.getItem('base64string')

      console.log(this.prod)
      apiService.addProduct(this.prod).then(
        result => {
          localStorage.removeItem('base64string')
          console.log(result)
          if (result.status === 201) {
            this.user = result.data
          }
        },
        error => {
          console.log(error.result)
          this.showError = true
        }
      )
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      //   this.form.email = ''
      //   this.form.name = ''
      //   this.form.food = null
      //   this.form.checked = []
      //   // Trick to reset/clear native browser form validation state
      //   this.show = false
      //   this.$nextTick(() => {
      //     this.show = true
      //   })
    }
  }
}
</script>
<style scoped>
.login-form {
  width: 700px;
  margin: 50px auto;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
</style>
