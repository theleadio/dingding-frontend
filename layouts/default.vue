<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  width:150px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--blue {
  @apply bg-blue-500 text-white;
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 10px;
  width:150px;
}

.button--blue:hover {
  @apply bg-blue-700;
  color: #fff;
}


.button--purple {
  @apply bg-purple-500 text-white;
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 10px;
  width: 150px;
}

.button--purple:hover {
  @apply bg-purple-700;
  color: #fff;
}
</style>
