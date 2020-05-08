<template>
<div>
  <NavBar />

  <div class="container">
    <div>
      <h2 class="text-3xl mt-8 mb-8">
        Check in at <strong>{{ fullName }}</strong>
      </h2>

  <form class="w-full px-4">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Full Name
        </label>
      </div>

      <div class="md:w-2/3 mx-5">
        <input v-model="customerName" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Please enter your name" >
      </div>
    </div>

    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-phone">
          Mobile 
        </label>
      </div>
      <div class="md:w-2/3 mx-5">
        <input v-model="mobile" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-phone" type="tel" placeholder="e.g. 012-7833132" pattern="01[0-9]{1}-[0-9]{8}">
      </div>
    </div>
    
    <div class="md:flex md:items-center mb-6">
        <p class="text-sm text-gray-500 font-bold px-4">
          Your details are only kept for record purposes and only be contacted in case of emergencies.
        </p>
    </div>
    
    <div class="md:flex md:items-center">
      <div class='mx-auto'>
        <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" @click="submit" type="button">
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
  data() {
    return {
      fullName: "",
      customerName: "",
      mobile: ""
    }
  },
  methods: {
    async getLocation() {
      var id = this.$route.params.id;
      // const fn = await this.$axios.$get('https://api.getdingding.com/owner/' + id)
      const fn = await this.$api.checkOwner(id);
      return fn[0].name;
    },
    async submit() {
      var id = this.$route.params.id;
      const res = await this.$axios.$post(`https://api.getdingding.com/owner/checkin/${id}`, {
        customerName: this.customerName,
        mobile: this.mobile
      })
      if (res.status == "done"){
        this.$router.push('/checkin/success');
      }
    }
  },
  async mounted() {
    this.fullName = await this.getLocation();
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
  font-family: 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

@responsive {
  .subtitle {
    font-size: 20px;
    color: #526488;
    padding-bottom: 15px;
  }

  .large-subtitle {
    font-size:40px;
  }
  
}

.links {
  padding-top: 15px;
}
</style>
