<template lang="pug">
  div(id="app")
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('./assets/img/oui-logo.png') no-repeat;
  /* background-size: 800px;
  background-position: right top;
  background-position-y: -180px; */
}

@media screen and (max-width: 576px) {
  #app {
    background-size: 300px;
    background-position: right top;
    background-position-y: -70px;
  }
}

@media screen and (min-width: 576px) {
  #app {
    background-size: 400px;
    background-position: right top;
    background-position-y: -95px;
  }
}

@media screen and (min-width: 768px) {
  #app {
    background-size: 450px;
    background-position: right top;
    background-position-y: -110px;
  }
}

@media screen and (min-width: 992px) {
  #app {
    background-size: 600px;
    background-position: right top;
    background-position-y: -150px;
  }
}

@media screen and (min-width: 1200px) {
  #app {
    background-size: 800px;
    background-position: right top;
    background-position-y: -180px;
  }
}
</style>
