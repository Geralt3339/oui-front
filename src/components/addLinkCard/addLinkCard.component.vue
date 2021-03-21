<template lang="pug">
  div.card.card-body
    div.container-md
      h3 Add link
      autocomplete-form(v-model="course.title" placeholder="Select course" :autocomplete="$store.getters.getCourses" :autocompleteItemName="courseNameHandler" :onAutocompleteItemClick="onCourseClickHandler" :onAutocompleteInput="onSearchInputHandler" :onAutocompleteClick="onSearchClickHandler")
      select.custom-select.mt-3
        option(v-for="semester, index in $store.getters.getSemesters" :key="index" @click="activeSemester = semester") {{ semester.name }}
      input.form-control.mt-3(v-model="model.name" placeholder="Group name")
      input.form-control.mt-3(v-model="model.join_url" placeholder="Group link")
      input.form-control.mt-3(placeholder="Photo url (optional)")
      div.row.justify-content-around.mt-3
        button.btn.btn-success(@click="saveBtnHandler" type="button" :disabled="loader")
          template(v-if="loader")
            span.spinner-border.spinner-border-sm(role="status" aria-hidden="true")
            span.ml-1 Loading...
          template(v-else)
            span Save
        button.btn.btn-outline-secondary(@click="$router.push('/')") Cancel
</template>

<script>
import autocompleteForm from '../core/autocompleteForm/autocompleteForm.component'

export default {
  components: {
    autocompleteForm
  },
  data () {
    return {
      activeSemester: null,
      loader: false,
      model: {
        name: '',
        join_url: ''
      },
      course: {
        title: '',
        item: null
      }
    }
  },

  watch: {
    '$store.getters.getSemesters' () {
      this.activeSemester = this.$store.getters.getSemesters[0]
    },
    '$store.getters.getAddGroupLoader' (val) {
      this.loader = val.loader
      if (!val.loader && val.fulfield) {
        this.model = {
          name: '',
          join_url: ''
        }
        this.course = {
          title: '',
          item: null
        }
        this.activeSemester = this.$store.getters.getSemesters[0]
      }
    }
  },

  methods: {
    saveBtnHandler () {
      this.$store.dispatch('addGroup', {
        ...this.model,
        semester: {
          ...this.activeSemester
        },
        course: {
          number: this.course.item.number
        }
      })
    },
    courseNameHandler (course) {
      return `${course.number} - ${course.name}`
    },
    onCourseClickHandler (course) {
      console.log('Course', course)
      this.course.item = course
    },
    onSearchInputHandler () {
      this.$store.dispatch('courses', this.course.title)
    },
    onSearchClickHandler () {
      this.$store.dispatch('courses', this.course.title)
    }
  }
}
</script>
