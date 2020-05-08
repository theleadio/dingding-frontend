<template>
<div>
  <NavBar />

  <ErrorBox :error="error" :errorTitle='errorTitle' :errorMessage='errorMessage' />

  <div class="container">
    <div>
      <h2 class="text-4xl mt-8 mb-4">
        Owner Login
      </h2>

  <form class="w-full px-4 md:w-1/2 md:mx-auto">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Mobile phone
        </label>
      </div>
      <div class="md:w-2/3">
        <input v-model="login.username" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="tel" placeholder="e.g. 01034567890" >
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phone">
          Password
        </label>
      </div>
      <div class="md:w-2/3">
        <input v-model="login.password" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-phone" type="password" placeholder="">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <label class="md:w-full block text-gray-700">
        <span class="text-sm lg:pl-6">
          Forgot password? Click <nuxt-link to="/owner/reset" class='underline'>here</nuxt-link> to reset.
        </span>
      </label>
    </div>
    <div class="md:flex md:items-center">
      <div class='mx-auto'>
        <button @click="userLogin" class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Login
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
import ErrorBox from '~/components/ErrorBox.vue'

export default {
  components: {
    Logo,
    NavBar,
    ErrorBox
  },
  data() {
    return {
      login: {
        username: '',
        password: ''
      },
      error: false,
      errorTitle: "Login failed.",
      errorMessage: "Either your mobile phone or password is wrong. Please try again"
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        this.error = true;
        console.log(err)
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
