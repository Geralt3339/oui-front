<template lang="pug">
  form.input-group.custom-search-form
    input.form-control.custom-autocomplete-input(v-model="model" type="text" :placeholder="placeholder" @click="autocompleteClickHandler" @input="autocompleteInputHandler")
    div.custom-autocomplete(ref="autocomplete")
      template(v-if="autocomplete.length === 0")
        a.dropdown-item No results
      template(v-else)
        a.dropdown-item.custom-dropdown-item.custom-autocompete-item(v-for="item, index in $store.getters.getCourses" :key="index" @click.prevent="autocompleteItemClickHandler(item)") {{ autocompleteItemName(item) }}
    div(v-if="dropdown").input-group-lg.input-group-append
      button.btn.btn-outline-secondary.dropdown-toggle(data-toggle="dropdown") {{ dropdownActiveElement ? dropdownActiveElement.name : dropdownPlaceholder }}
      div.dropdown-menu
        template(v-if="dropdownItems.length === 0")
          a.dropdown-item.custom-dropdown-item No results
        template(v-else)
          a.dropdown-item.custom-dropdown-item(v-for="item, index in dropdownItems" :key="index" @click.prevent="dropdownItemClickHandler(item)") {{ item.name }}
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: Array,
      default () {
        return []
      }
    },
    dropdown: {
      type: Boolean,
      default: false
    },
    dropdownItems: {
      type: Array,
      default () {
        return []
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    dropdownActiveElement: {
      type: Object,
      default () {
        return {}
      }
    },
    dropdownPlaceholder: {
      type: String,
      default: ''
    },
    onAutocompleteClick: {
      type: Function,
      default: () => {}
    },
    onAutocompleteItemClick: {
      type: Function,
      default: () => {}
    },
    onAutocompleteInput: {
      type: Function,
      default: () => {}
    },
    autocompleteItemName: {
      type: Function,
      default: () => ''
    }
  },

  data () {
    return {
      model: this.value,
      autocompleteDebounce: null,
      documentClickListener: (event) => {
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

  methods: {
    autocompleteClickHandler () {
      this.$refs.autocomplete.classList.add('custom-show')
      this.onAutocompleteClick()
    },
    autocompleteInputHandler () {
      if (!this.$refs.autocomplete.classList.contains('custom-show')) {
        this.$refs.autocomplete.classList.add('custom-show')
      }
      this.$emit('input', this.model)
      clearTimeout(this.autocompleteDebounce)
      this.autocompleteDebounce = setTimeout(() => {
        this.onAutocompleteInput()
      }, 500)
    },
    autocompleteItemClickHandler (autocompleteItem) {
      this.model = this.autocompleteItemName(autocompleteItem)
      this.$emit('input', this.model)
      this.onAutocompleteItemClick(autocompleteItem)
      this.$refs.autocomplete.classList.remove('custom-show')
    },
    dropdownItemClickHandler (item) {
      this.$emit('dropdown-active', item)
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
