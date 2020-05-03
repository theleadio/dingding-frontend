<template>
<div>
  <NavBar class='screen-only' />
  <div class="container">
    <div style='display: block;'>
      <h2 class="title mt-16 mb-4">
        {{ this.displayName }}
      </h2>
      
      <div class='text-center'>Please scan the QR code below before entering the premise.</div>
      <div><img class='mx-auto' :src="'https://api.getdingding.com/qr/'+this.$route.params.id"  /></div>

      <div class='text-large'>Thank you for your co-operation</div>
      <p class='mt-10 text-sm font-bold'>Powered by DingDing 🛎</p>
      <p class='text-sm'>https://www.getdingding.com</p>

      <div class='screen-only mt-32 mb-4'>You may save the QR code or print this poster.</div>
      <button class='screen-only bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' @click="print" >Print</button>

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
      displayName: "..."
    }
  },
  methods: {
    register: async function() {
      console.log('registering...');
      const res = await this.$axios.$post('http://localhost:5000/owner')
      if (res.status == "done") {
        this.$router.push("poster/ah-liang")
      }
    },

    print() {
      window.print();
    }
  },
  mounted() {
    var id = this.$route.params.id;
    var vm = this;
    console.log(id);
    this.$axios.get(`http://localhost:5000/owner/${id}`)
    .then( function(result) {
      console.log(result.data[0].name);
      vm.displayName = result.data[0].name;
    })
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

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
  font-size: 50px;
  font-weight:500;
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

@media print {
  .screen-only {
    display:none;
  }

  .title {
    font-size:36px;
    color:black;
  }
}

</style>
