<!-- <a href="http://localhost:9090/example/tree/index.html">Go to Login</a> -->
<template>
<div class=" wrapper">
  <div class="content">
      <h2 class="h2">
          Data Analytic Tool to Search Through <br /> Multiple Databases
      </h2>
        <div class="inner_content ">
            <form v-if="!success" class="bg-white shadow-lg rounded-lg px-4 pt-4 pb-4 mb-4">
                <span v-if="error" class="text-danger font-weight-bold text-base d-flex justify-content-center mb-2">{{ errorMessage }}</span>
                <div class="form-group mb-4">
                    <label class="text-gray-700 font-weight-semibold mb-4" for="key">
                        Enter your Secret Key to Access
                    </label>
                    <input @input="clearError" v-model="typedKey" class="form-control" id="key" type="password" placeholder="Enter Secret key" />
                </div>
                    <button @click.prevent="verification" class="btn btn-primary" type="button" @click="check">
                        Go to Portal
                    </button>
            </form>
            <div v-if="success && !granted" class="loader_div">
                <div class="custom-loader"></div>
                <span>Granting Access ...</span>
            </div>
            <div  v-if="granted" class="granted_message">
                <span class="">Access Granted Successfully!</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      granted: false,
      success: false,
      error: false,
      typedKey: '',
      errorMessage: '',
      secretKey: '111'
    }
  },
  methods: {
    async verification () {
      if (this.typedKey === this.secretKey) {
        this.success = true
        await new Promise((resolve) => setTimeout(resolve, 1200))
        this.granted = true
        await new Promise((resolve) => setTimeout(resolve, 800))
        // Move to the specified link after the second setTimeout
        window.location.href = 'http://localhost:9090/example/search/index.html'
      } else if (this.typedKey === '') {
        this.errorMessage = 'Please Enter Key.. '
        this.error = true
      } else {
        this.errorMessage = 'Incorrect Key!'
        this.error = true
        this.typedKey = ''
      }
    },
    clearError () {
      this.error = false
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
