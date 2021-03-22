<template lang="pug">
  div.card.card-body
    div.container-md
      h3 Add link
      form(@submit.prevent="saveBtnHandler")
        autocomplete-form(v-model="model.courseTitle" :inputClass="!validations.course ? 'custom-validation-error' : ''" placeholder="Select course" :autocomplete="$store.getters.getCourses" :autocompleteItemName="courseNameHandler" :onAutocompleteItemClick="onCourseClickHandler" :onAutocompleteInput="onSearchInputHandler" :onAutocompleteClick="onSearchClickHandler")
        div(v-if="!validations.course").custom-validation-error-message.mt-1.ml-2 You must choose the course
        select.custom-select.mt-3
          option(v-for="semester, index in $store.getters.getSemesters" :key="index" @click="activeSemester = semester") {{ semester.name }}
        input.form-control.mt-3(v-model="model.name" placeholder="Group name" :class="!validations.name ? 'custom-validation-error' : ''" @click="validations.name = true")
        div(v-if="!validations.name").custom-validation-error-message.mt-1.ml-2 Group name is required
        input.form-control.mt-3(v-model="model.join_url" :class="!validations.join_url ? 'custom-validation-error' : ''" placeholder="Group link" @click="validations.join_url = true")
        div(v-if="!validations.join_url").custom-validation-error-message.mt-1.ml-2 Group link is required
        div.row.justify-content-around.mt-3
          button.btn.btn-success(type="submit" :disabled="loader")
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
        join_url: '',
        course: null,
        courseTitle: ''
      },
      validations: {
        course: true,
        name: true,
        join_url: true
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
      if (this.validationsHandler()) {
        this.$store.dispatch('addGroup', {
          ...this.model,
          semester: {
            ...this.activeSemester
          },
          course: {
            number: this.model.course.number
          }
        })
      }
    },
    courseNameHandler (course) {
      return `${course.number} - ${course.name}`
    },
    onCourseClickHandler (course) {
      console.log('Course', course)
      this.model.course = course
    },
    onSearchInputHandler () {
      this.$store.dispatch('courses', this.model.courseTitle)
    },
    onSearchClickHandler () {
      this.validations.course = true
      this.$store.dispatch('courses', this.model.courseTitle)
    },
    validationsHandler () {
      const keys = Object.keys(this.validations)
      let validationStatus = true
      keys.forEach(key => {
        if (this.model[key] === '' || this.model[key] === null) {
          this.validations[key] = false
          validationStatus = false
        }
      })
      return validationStatus
    }
  }
}
</script>

<style scoped>
.custom-validation-error {
  border-color: #dc3545;
}

.custom-validation-error-message {
  color: #dc3545;
  font-size: 80%;
}
</style>
