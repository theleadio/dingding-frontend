<template>
  <div class="mobile-container md:container">
    <div>
      <logo />
      <h1 class="title md:super-title">
        DingDing
      </h1>
      <h2 class="subtitle md:super-subtitle">
        You have checked in successfully. 
      </h2>
      <div>You may close this window now.</div>
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


@responsive {
  .container { 
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .mobile-container {
    padding-top:10px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  } 

  .title {
    font-family: 'Helvetica Neue';
    display: block;
    font-size: 60px;
    color: #35495e;
  }

  .super-title {
    font-family: 'Helvetica Neue';
    display: block;
    font-size: 100px;
    color: #35495e;    
  }

  .subtitle {
    font-weight: 400;
    font-size: 25px;
    color: #526488;
    padding-bottom: 15px;
  }

  .super-subtitle {
    font-weight: 400;
    font-size: 38px;
    color: #526488;
    padding-bottom: 15px;
  }

}


.links {
  padding-top: 15px;
}
</style>
