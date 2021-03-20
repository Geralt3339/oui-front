<template lang="pug">
  div.mt-4
    group(v-for="group, index in $store.getters.getGroups" :key="index" :group="group")
</template>

<script>
import group from './group/group.component'

export default {
  components: {
    group
  }
}
</script>
