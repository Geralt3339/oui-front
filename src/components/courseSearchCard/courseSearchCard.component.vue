<template lang="pug">
  div.card.card-body.custom-border-shadow
    div.container-md.px-0.px-md-3
      h3 Find #[i.fab.fa-whatsapp.text-success] chat
      autocomplete-form(v-model="courseName" :autocomplete="$store.getters.getCourses" :autocompleteItemName="courseNameHandler" :dropdown="true" :dropdownItems="$store.getters.getSemesters" placeholder="Course number or name..." dropdownPlaceholder="Semester" :dropdownActiveElement="activeSemester" :onAutocompleteItemClick="onCourseClickHandler" :onAutocompleteInput="onSearchInputHandler" :onDropdownItemClick="onSemesterClickHandler" :onClearIconClick="onClearIconClickHandler")
      template(v-if="$store.getters.getGroups.length > 0")
        groupes-list
        h5 ... or #[router-link(to="/addLink") add a new one]
      template(v-else)
        div.container.mt-3
          h5.text-center {{ courseName === '' ? 'Browse available groups on different courses' : 'No groups for this course' }}
          div.row.justify-content-center.mt-5.mb-5
            button.btn.btn-outline.btn-success(@click="$router.push('/addLink')") Add group
</template>

<script>
import autocompleteForm from '../core/autocompleteForm/autocompleteForm.component'
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
        semester: this.activeSemester
      })
      this.activeCourse = course
    },
    onSearchInputHandler () {
      this.$store.dispatch('courses', this.courseName)
    },
    onClearIconClickHandler () {
      this.$store.dispatch('groupsSearchReset')
    },
    onSemesterClickHandler (data) {
      this.activeSemester = data
      if (this.activeCourse.number) {
        this.$store.dispatch('groups', {
          course_number: this.activeCourse.number,
          semester: this.activeSemester
        })
      }
    },
    courseNameHandler (course) {
      return `${course.number} - ${course.name}`
    }
  }
}
</script>

<style scoped>
.custom-border-shadow {
  box-shadow: 0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);
}
</style>
