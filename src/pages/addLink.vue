<template lang="pug">
  def-layout
    div.container
      div.row.justify-content-center
        div.col-6
          add-link-card
</template>

<script>
import defLayout from '../layouts/default'

import addLinkCard from '../components/addLinkCard/addLinkCard.component'

export default {
  components: {
    defLayout,
    addLinkCard
  }
}
</script>
