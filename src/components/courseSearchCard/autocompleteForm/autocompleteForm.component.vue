<template lang="pug">
  form.input-group.custom-search-form
    input.form-control(type="text" placeholder="Course number or name...")
    div.input-group-lg.input-group-append
      button.btn.btn-outline-secondary.dropdown-toggle(data-toggle="dropdown") {{ activeSemester ? activeSemester.name : 'Semester..' }}
      div.dropdown-menu
        a.dropdown-item(v-for="semester, index in $store.getters.getSemesters" :key="index" @click.prevent="activeSemester = semester") {{ semester.name }}
</template>

<script>
export default {
  data () {
    return {
      activeSemester: null
    }
  },

  watch: {
    '$store.getters.getSemesters' () {
      this.activeSemester = this.$store.getters.getSemesters[0]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .custom-search-form button, .custom-search-form input {
    font-size: 0.8rem!important;
  }
}
</style>
