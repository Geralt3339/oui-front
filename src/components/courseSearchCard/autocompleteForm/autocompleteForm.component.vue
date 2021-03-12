<template lang="pug">
  form.input-group.custom-search-form
    //- input.form-control(v-model="activeCourseText" type="text" placeholder="Course number or name..." @focus="autocompleteFocusHandler" @blur="$refs.autocomplete.classList.remove('show')")
    input.form-control(v-model="activeCourseText" type="text" placeholder="Course number or name..." @focus="autocompleteFocusHandler")
    div.dropdown-menu.custom-autocomplete(ref="autocomplete" @blur="$refs.autocomplete.classList.remove('show')")
      a.dropdown-item.custom-dropdown-item(v-for="course, index in $store.getters.getCourses" :key="index" @click.prevent="courseClickHandler(course)") {{ course.number }} - {{ course.name }}
    div.input-group-lg.input-group-append
      button.btn.btn-outline-secondary.dropdown-toggle(data-toggle="dropdown") {{ activeSemester ? activeSemester.name : 'Semester..' }}
      div.dropdown-menu
        a.dropdown-item.custom-dropdown-item(v-for="semester, index in $store.getters.getSemesters" :key="index" @click.prevent="activeSemester = semester") {{ semester.name }}
</template>

<script>
export default {
  data () {
    return {
      activeSemester: null,
      activeCourse: null,
      activeCourseText: ''
    }
  },

  watch: {
    '$store.getters.getSemesters' () {
      this.activeSemester = this.$store.getters.getSemesters[0]
    },
    activeCourseText (val) {
      console.log(val)
    }
  },

  methods: {
    autocompleteFocusHandler () {
      this.$refs.autocomplete.classList.add('show')
      this.$store.dispatch('courses', '')
    },
    courseClickHandler (course) {
      console.log(course)
      this.activeCourse = course
      this.activeCourseText = `${course.number} - ${course.name}`
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

.custom-autocomplete {
  overflow: hidden;
  height: 20rem;
  overflow-y: scroll;
}

.custom-dropdown-item {
  cursor: pointer;
}
</style>
