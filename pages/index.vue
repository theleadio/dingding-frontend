<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        DingDing
      </h1>
      <h2 class="subtitle">
        Track your visitors easily
      </h2>
      
      <div>Please select your role:</div>
      
      <div class="links">
        <a href="customer/123" class='button--blue'>
          Customer
        </a>
      </div>

      <div class="links">
        <a href="owner" class="button--purple">
          Business Owner
        </a>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
  min-height: 100vh;
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
  font-weight: 300;
  font-size: 38px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
