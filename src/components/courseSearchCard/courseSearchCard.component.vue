<template lang="pug">
  div.card.card-body
    div.container
      h3 Find #[i.fab.fa-whatsapp.text-success] chat
      autocomplete-form
      courses-list
      h5 ... or #[router-link(to="/addLink") add a new one]
</template>

<script>
import autocompleteForm from './autocompleteForm/autocompleteForm.component'
import coursesList from './coursesList/coursesList.component'

export default {
  components: {
    coursesList,
    autocompleteForm
  }
}
</script>
