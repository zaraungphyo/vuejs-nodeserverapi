<template>
  <div class="row">
    <div class="col-md-3 col-sm-4 col-xs-12 single_portfolio_text" v-for="item in prods">
      <div>
        <b-card
          v-bind:title="item.name"
          v-bind:img-src="item.image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>Price : {{item.price}}</br>Quantity : {{item.qty}}</b-card-text>

          <b-button href="#" variant="primary">Add to cart</b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { APIService } from '../api-service'
const apiService = new APIService()

export default {
  data () {
    return {
      showError: false,
      prods: []
    }
  },
  created () {
    apiService.getProducts().then(response => {
      this.prods = response
    })
  },
  mounted () {
    // apiService.getProducts().then(
    //   response => {
    //     alert('HI')
    //     //  console.log(response.data.results)
    //     this.prods = response.data.results
    //   },
    //   error => {
    //     console.log(error.result)
    //     this.showError = true
    //   }
    // )197 131
  }
}
</script>
<style>
.card-img-top{
	height: 150px !important;
}
</style>


