<template>
  <div class="mobile-container md:container flex-col">
    <div class='pb-10'>
      <logo />

      <h1 class="text-6xl">
        DingDing
      </h1>
      <h2 class="text-xl mb-8 px-4">
        Keep track of your customers easily
      </h2>
      
      <div class="mt-4">
        <nuxt-link class="button--purple" to="/owner/register">Business Owner Signup</nuxt-link>
      </div>

      <div class="mt-4">
        Already signed up? <nuxt-link to="/owner/login" class='font-bold'>Login</nuxt-link> here.
      </div>

      <div class='text-center pt-4 px-5 md:px-20 mt-4'>
        DingDing helps business owners to record customers who have visited their premises using QR code. This ensures we follow the SOP without the mess of using pen and paper. <br/><br/>
        <span class='text-red-600'>No app download required!</span>
      </div>


    </div>
    
    <!-- Second Row -->
    <div class='bg-gray-200 w-full py-10 text-left px-8'>
      <h2 class='text-4xl text-center mb-4'>What is DingDing?</h2>
      <p>DingDing is an application that helps you to keep track of customers who have visited your shop. This is part of the SOP requirements by the government and it helps to keep yourself and your customers safe.</p>
      <p class='mt-4 font-semibold'>Follow the steps below to begin using DingDing:</p>
      <ol class='list-disc list-inside'>
        <li>STEP 1: Select your role as a business owner, sign up for an account using your mobile phone.</li>
        <li>STEP 2: Print the QR code and paste it around your premise, or send it to your customers.</li>
        <li>STEP 3: Make sure your customers to scan the QR code and register, before entering your premise.</li>
      </ol>
    </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  head: {
  script: [
    { async:true, hid: 'oldbrowser', innerHTML: "(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='7f487a41d12883b7c990ead3887504eb50445aea4cc222fe47b77c90f0dc0be8';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');" }
  ],
  __dangerouslyDisableSanitizers: ['script']
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
    display: block;
    font-size: 60px;
    color: #35495e;
  }

  .super-title {
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

</style>
