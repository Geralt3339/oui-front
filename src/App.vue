<template lang="pug">
  div(id="app")
    def-layout
      router-view
</template>

<script>
import defLayout from './layouts/default'

export default {
  name: 'App',
  components: {
    defLayout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
