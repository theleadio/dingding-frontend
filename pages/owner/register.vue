<template>
<div>
  <NavBar />

  <div class='w-full lg:w-1/3 px-10 mx-auto mt-6' v-show="error">
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
      <strong class="font-bold">Registration failed!</strong>
      <span class="block sm:inline">{{ errorMessage }}</span>
    </div>
  </div>

  <div class="container">
    <div>
      <h2 class="subtitle mt-8 mb-4">
        Business Registration
      </h2>

  <form class="w-full">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Business Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input v-model="businessName" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="e.g. Yummy Burger" >
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phone">
          Mobile Phone 
        </label>
      </div>
      <div class="md:w-2/3">
        <input v-model="mobile" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-phone" type="tel" placeholder="e.g. 012-7833132" pattern="01[0-9]{1}-[0-9]{8}">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <label class="md:w-full block text-gray-700">
        <span class=" lg:pl-6">
          Already register? <nuxt-link to="/owner/login" class='font-bold'>Login here</nuxt-link>
        </span>
      </label>
    </div>
    <div class="md:flex md:items-center">
      <div class='mx-auto'>
        <button @click="register" class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Register
        </button>
      </div>
    </div>
  </form>      
      

    </div>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    Logo,
    NavBar
  },
  data() {
    return {
      businessName: "",
      mobile: "",
      error: false,
      errorMessage: ""
    }
  },
  methods: {
    register: async function() {
      console.log('registering...');
      const res = await this.$axios.$post('/owner', {
        businessName: this.businessName,
        mobile: this.mobile
      })
      
      if (res.status == "done") {
        this.$router.push({path: `/poster/${res.id}`});
      }
      else {
        this.error = true;
        this.errorMessage = "Name has already been taken, please try again"
        console.log(res);
      }
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-size: 42px;
  color: #526488;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
