<template lang="pug">
  div
    main
      div.container-md.mb-4
        div.main-title
          h1.font-weight-bold.page-title.text-primary The Open University of Israel.
          h2.font-weight-bold.page-title-2.text-secondary Student Community.
        div.container-md.px-0.px-md-3.mt-5
          slot
    footer.custom-footer
</template>

<script>
export default {
  beforeMount () {
    this.$store.dispatch('semesters')
  }
}
</script>

<style scoped>
main {
  margin-bottom: 60px;
  /* background-color: #c5ede2; */
}

.custom-footer {
  position: absolute;
  background-color: #5a6169;
  height: 45px;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 300;
}
</style>
