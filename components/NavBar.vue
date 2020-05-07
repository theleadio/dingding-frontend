<template>
    <nav class="flex items-center justify-between flex-wrap p-6" :class="getClass">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class='mr-4'>🛎</span>
      <a href='/'><span class="font-semibold text-xl tracking-tight">DingDing</span></a>
    </div>

  <div class="text-sm "></div>
    <div v-show="this.$auth.loggedIn" >
      <button @click='logout' class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-600 hover:bg-white">Logout</button>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
    async logout() {
      await this.$auth.logout();
      }
    },
    computed: {
      getClass() {
        if (this.$route.path.includes('owner') || this.$route.path.includes('poster')) { 
          return "bg-purple-600";
        }
        return "bg-blue-600";
      }
    }
  }
</script>