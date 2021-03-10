<template lang="pug">
  div.card.card-body
    div.container-md
      h3 Add link
      input.form-control(placeholder="Select course")
      select.custom-select.mt-3
        option(v-for="semester, index in $store.getters.getSemesters" :key="index" @click="activeSemester = semester") {{ semester.name }}
      input.form-control.mt-3(placeholder="Group name")
      input.form-control.mt-3(placeholder="Group link")
      div.row.justify-content-around.mt-3
        button.btn.btn-success(@click="saveBtnHandler") Save
        button.btn.btn-outline-secondary(@click="$router.push('/')") Cancel
</template>

<script>
import { showToast } from '../../plugins/toast'

export default {
  data () {
    return {
      activeSemester: null
    }
  },

  methods: {
    saveBtnHandler () {
      showToast({
        message: 'Something went wrong',
        type: 'error',
        position: 'top-right'
      })
      showToast({
        message: 'Success!',
        type: 'success',
        position: 'top-right'
      })
      this.$router.push('/')
    }
  }
}
</script>
