<template lang="pug">
  div.card.card-body
    div.container-md
      h3 Find #[i.fab.fa-whatsapp.text-success] chat
      autocomplete-form(v-model="courseName" :autocomplete="$store.getters.getCourses" :autocompleteItemName="courseNameHandler" :dropdown="true" :dropdownItems="$store.getters.getSemesters" placeholder="Course number or name..." dropdownPlaceholder="Semester" :dropdownActiveElement="activeSemester" :onAutocompleteItemClick="onCourseClickHandler" :onAutocompleteInput="onSearchInputHandler" :onAutocompleteClick="onSearchClickHandler" @dropdown-active="onSemesterClickHandler")
      template(v-if="$store.getters.getGroups.length > 0")
        groupes-list
        h5 ... or #[router-link(to="/addLink") add a new one]
      template(v-else)
        div.container.mt-3
          h3.text-center {{ courseName === '' ? 'Browse available groups on different courses' : 'No groups for this course' }}
          div.row.justify-content-center.mt-5.mb-5
            button.btn.btn-outline.btn-success(@click="$router.push('/addLink')") Add group
</template>

<script>
import autocompleteForm from './autocompleteForm/autocompleteForm.component'
import groupesList from './groupesList/groupesList.component'

export default {
  components: {
    groupesList,
    autocompleteForm
  },

  data () {
    return {
      courseName: '',
      activeSemester: null,
      activeCourse: null
    }
  },

  watch: {
    '$store.getters.getSemesters' () {
      this.activeSemester = this.$store.getters.getSemesters[0]
    }
  },

  methods: {
    onCourseClickHandler (course) {
      this.$store.dispatch('groups', {
        course_number: course.number,
        messenger_id: '0',
        semester: this.activeSemester
      })
    },
    onSearchInputHandler () {
      this.$store.dispatch('courses', this.courseName)
    },
    onSearchClickHandler () {
      this.$store.dispatch('courses', this.courseName)
    },
    onSemesterClickHandler (data) {
      this.activeSemester = data
    },
    courseNameHandler (course) {
      return `${course.number} - ${course.name}`
    }
    // courseNameRefreshHandler (value) {
    //   this.courseName = value
    // }
  }
}
</script>
