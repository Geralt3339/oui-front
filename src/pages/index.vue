<template lang="pug">
  def-layout
    div.container-md.px-0.px-md-3.custom-page-animation(:class="visible ? 'custom-visible' : ''")
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
  },

  data () {
    return {
      visible: false
    }
  },

  mounted () {
    this.visible = true
  }
}
</script>

<style scoped>
.custom-page-animation {
  opacity: 0;
  transition: opacity ease-out 0.2s;
}

.custom-visible {
  opacity: 1!important;
}
</style>
