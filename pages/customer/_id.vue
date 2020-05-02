<template>
<div>
  <NavBar />

  <div class="container">
    <div>
      <h2 class="subtitle mt-16 mb-4">
        Check in at <strong>{{ getLocation() }}</strong>
      </h2>

  <form class="w-full">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Full Name
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Please enter your name" >
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phone">
          Mobile 
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-phone" type="tel" placeholder="e.g. 012-7833132" pattern="01[0-9]{1}-[0-9]{8}">
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <label class="md:w-full block text-gray-500 font-bold">
        <span class="text-sm pl-0 sm:pl-6">
          Your details are only kept by owner for <br class='md:hidden' /> record purposes.
        </span>
      </label>
    </div>
    <div class="md:flex md:items-center">
      <div class='mx-auto'>
        <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Submit
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
  methods: {
    getLocation() {
      var id = this.$route.params.id;
      return "aloha " + id;
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
  display: flex;
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
