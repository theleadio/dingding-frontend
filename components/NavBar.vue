<template>
    <nav class="flex items-center justify-between flex-wrap p-6" :class="getClass">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class='mr-4'>🛎</span>
      <a href='/'><span class="font-semibold text-xl tracking-tight">DingDing</span></a>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      getClass() {
        if (this.$route.path.includes('owner')) { 
          return "bg-purple-600";
        }
        return "bg-blue-600";
      }
    }
  }
</script>