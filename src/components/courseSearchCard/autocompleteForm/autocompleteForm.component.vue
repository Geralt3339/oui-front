<template lang="pug">
  form.input-group.custom-search-form
    input.form-control.custom-autocomplete-input(v-model="activeCourseText" type="text" placeholder="Course number or name..." @click="autocompleteClickHandler" @input="autocompleteInputHandler")
    div.custom-autocomplete(ref="autocomplete")
      template(v-if="$store.getters.getCourses.length === 0")
        a.dropdown-item No results
      template(v-else)
        a.dropdown-item.custom-dropdown-item.custom-autocompete-item(v-for="course, index in $store.getters.getCourses" :key="index" @click.prevent="courseClickHandler(course)") {{ course.number }} - {{ course.name }}
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
      activeCourseText: '',
      autocompleteDebounce: null,
      documentClickListener: (event) => {
        console.log(event.target.classList.contains('custom-autocompete-item'))
        if (!event.target.classList.contains('custom-autocomplete-input') && !event.target.classList.contains('custom-autocompete-item')) {
          this.$refs.autocomplete.classList.remove('custom-show')
        }
      },
      documentEscKeyDownListener: (event) => {
        if (event.keyCode === 27) {
          this.$refs.autocomplete.classList.remove('custom-show')
        }
      }
    }
  },

  created () {
    document.addEventListener('click', this.documentClickListener)
    document.addEventListener('keydown', this.documentEscKeyDownListener)
  },

  beforeDestroy () {
    document.removeEventListener('click', this.documentClickListener)
    document.removeEventListener('keydown', this.documentEscKeyDownListener)
  },

  watch: {
    '$store.getters.getSemesters' () {
      this.activeSemester = this.$store.getters.getSemesters[0]
    }
  },

  methods: {
    autocompleteClickHandler () {
      this.$refs.autocomplete.classList.add('custom-show')
      this.$store.dispatch('courses', this.activeCourseText)
    },
    autocompleteInputHandler () {
      if (!this.$refs.autocomplete.classList.contains('custom-show')) {
        this.$refs.autocomplete.classList.add('custom-show')
      }
      clearTimeout(this.autocompleteDebounce)
      this.autocompleteDebounce = setTimeout(() => {
        this.$store.dispatch('courses', this.activeCourseText)
      }, 500)
    },
    courseClickHandler (course) {
      this.activeCourse = course
      this.activeCourseText = `${course.number} - ${course.name}`
      this.$refs.autocomplete.classList.remove('custom-show')
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
  max-height: 20rem;
  overflow: hidden;
  overflow-y: scroll;

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 200;
  display: none;
  float: left;
  min-width: 85%;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
}

.custom-show {
  display: block!important;
}

.custom-dropdown-item {
  cursor: pointer;
}
</style>
