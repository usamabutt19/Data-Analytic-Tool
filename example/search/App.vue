<template>
  <div class=" wrapper">
    <div class="content">
        <h2 class="h2">
            Data Analytic Tool to Search Through <br /> Multiple Databases
        </h2>
          <div class="inner_content ">
              <form v-if="!success" class="bg-white shadow-lg rounded-lg px-4 pt-4 pb-4 mb-4">
                  <span v-if="error" class="text-danger">{{ errorMessage }}</span>
                  <div class="form-group mb-4">
                      <label class="text-gray-700 font-weight-semibold mb-4" for="key">
                          Enter your CNIC to Seacrch
                      </label>
                      <input maxlength="15" v-model="cnic" @input="formatCnic" class="form-control" id="key" type="text" placeholder="Enter CNIC" />
                  </div>
                      <button @click.prevent="searchNadra" class="btn btn-primary" type="button" @click="check">
                          Search Results
                      </button>
              </form>
              <div v-if="success" class="loader_div">
                  <div class="custom-loader"></div>
                  <span>Loading Data ...</span>
              </div>
          </div>
      </div>
  </div>
  </template>

<script >
// import axios from "axios";

export default {
  data () {
    return {
      cnic: '',
      success: false,
      error: false,
      errorMessage: ''
    }
  },
  methods: {
    formatCnic () {
      let cnic = this.cnic.replace(/[^0-9]/g, '')
      if (cnic.length > 5) {
        cnic = cnic.slice(0, 5) + '-' + cnic.slice(5)
      }
      if (cnic.length > 13) {
        cnic = cnic.slice(0, 13) + '-' + cnic.slice(13)
      }
      this.error = false
      this.cnic = cnic
    },
    async searchNadra () {
      if (this.cnic.length < 15) {
        // console.log('this.cnic:', this.cnic)
        this.error = true
        this.errorMessage = 'Enter Complete CNIC!!'
        this.cnic = ''
      } else {
        // console.log('Mesasda: ', this.cnic.length)
        this.success = true
        await new Promise((resolve) => setTimeout(resolve, 1500))
        window.location.href = 'http://localhost:9090/example/tree/index.html'
        this.success = false
      }
    }
  }
}
</script>

<style scoped>
    .wrapper{
      height: 100vh;
      background-image:url('../../docs/img/bg.jpg');/* Replace 'bg.jpg' with the actual image file name */
      background-size: cover; /* Scale the background image to cover the whole page */
      background-repeat: no-repeat;
    }
    .h2{
      padding-top: 4rem;
      color: rgb(73, 145, 221);
      text-align: center;
      font-weight: 700;
    }
    .content{
      min-height: 60vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .inner_content{
      width: 40%;
      padding: 2rem ;
      background-color: rgb(255, 255, 255);
      border-radius: 10px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    .loader_div{
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: center;
    }
    .granted_message{
      display: flex;
      justify-content: center;
      font-weight: 700;
      font-size: 24px;
    }
    .custom-loader {
    width:50px;
    height:50px;
    border-radius:50%;
    background:conic-gradient(#0000 10%,#766DF4);
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
    animation:s3 1s infinite linear;
  }
  @keyframes s3 {to{transform: rotate(1turn)}}
</style>


