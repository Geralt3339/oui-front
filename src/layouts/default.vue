<template lang="pug">
  div
    div(class="container custom-app")
      div.main-title
        h1.font-weight-bold.page-title.text-primary The Open University of Israel.
        h2.font-weight-bold.page-title-2.text-secondary Student Community.
      div.container.mt-5
        slot
    div.container-fluid.custom-footer
</template>

<script>
export default {
  beforeMount () {
    this.$store.dispatch('semesters')
  }
}
</script>

<style scoped>
.custom-app {
  height: 90vh;
}

.custom-footer {
  height: 150px;
  background-color: #5a6169;
  position: relative;
  bottom: 0;
}
</style>
