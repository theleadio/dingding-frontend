<template>
  <div class='w-full lg:w-1/3 px-10 mx-auto mt-6' v-show="error">
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
      <strong class="font-bold">{{ errorTitle }}</strong>
      <span class="block sm:inline">{{ errorMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'error': Boolean,
    'errorTitle': String,
    'errorMessage': String
  }
}
</script>