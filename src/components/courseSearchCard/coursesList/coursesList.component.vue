<template lang="pug">
  div.mt-4
    course(v-for="index in 3" :key="index")
</template>

<script>
import course from './course/course.component'

export default {
  components: {
    course
  }
}
</script>
