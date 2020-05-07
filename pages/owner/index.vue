
<template>
<div>
  <NavBar />

  <div class="container">
    <div>
      <h2 class="text-4xl mt-8">
        {{ this.$auth.user.displayname }}
      </h2>
      <h3 class='text-xl mb-4'>Customer List</h3>
    </div>
    
    <div class='px-4'>
      <table class="table-auto mx-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Time</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(c, idx) in customers" v-bind:key="idx">
            <td class='border px-4 py-2 '>{{ c.checkin_time | moment("DD/MM/yyyy") }}</td>
            <td class='border px-4 py-2 text-left'>{{ c.customerName }}</td>
            <td class='border px-4 py-2'>{{ c.mobile }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavBar from '~/components/NavBar.vue'
import moment from 'vue-moment';

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
      errorMessage: "",
      customers:[]
    }
  },
  async mounted() {
    console.log(moment);
    var id = this.$auth.user.id;
    const res = await this.$axios.$get(`/owner/${id}/list`)
    this.customers = res;
  },
  middleware: 'auth'
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
