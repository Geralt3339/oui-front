<template lang="pug">
  form.input-group
    input.form-control(type="text" placeholder="Course number or name...")
    div.input-group-lg.input-group-append
      button.btn.btn-outline-secondary.dropdown-toggle(data-toggle="dropdown") {{ activeSemester ? activeSemester.name : 'Choose semester' }}
      div.dropdown-menu
        a.dropdown-item(v-for="semester, index in $store.getters.getSemesters" :key="index" @click.prevent="activeSemester = semester") {{ semester.name }}
</template>

<script>
export default {
  data () {
    return {
      activeSemester: null
    }
  }
}
</script>
