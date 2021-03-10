<template lang="pug">
  def-layout
    div.container-md
      div.row.justify-content-center
        div.col-12.col-md-10.col-lg-9
          course-search-card
</template>

<script>
import defLayout from '../layouts/default'
import courseSearchCard from '../components/courseSearchCard/courseSearchCard.component'

export default {
  components: {
    defLayout,
    courseSearchCard
  }
}
</script>

<style scoped>

</style>
