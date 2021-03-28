<template lang="pug">
  div.input-group
    input.form-control.custom-autocomplete-input.border-right-0(v-model="model" type="text" :class="inputClass" :placeholder="placeholder" @click="autocompleteClickHandler" @input="autocompleteInputHandler")
    div.custom-autocomplete(ref="autocomplete")
      template(v-if="autocomplete.length === 0")
        a.dropdown-item No results
      template(v-else)
        a.dropdown-item.custom-dropdown-item.custom-autocompete-item(v-for="item, index in $store.getters.getCourses" :key="index" @click.prevent="autocompleteItemClickHandler(item)") {{ autocompleteItemName(item) }}
    div.input-group-append
      span.input-group-text.bg-transparent.custom-autocomplete-icon(:class="inputClass" @click="clearIconClickHandler") #[i.fas.fa-times]
      template(v-if="dropdown")
        button.btn.btn-outline-secondary.dropdown-toggle.custom-dropdown-button(data-toggle="dropdown" id="dropdownMenuButton" type="button" aria-haspopup="true" aria-expanded="false") {{ dropdownActiveElement ? dropdownActiveElement.name : dropdownPlaceholder }}
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
    onClearIconClick: {
      type: Function,
      default: () => {}
    },
    onDropdownItemClick: {
      type: Function,
      default: () => {}
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
    },
    inputClass: {
      type: String,
      default: ''
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

  computed: {
    iconClass () {
      if (!this.dropdown) {
        return ''
        // return `custom-autocomplete-icon-postion-fix`
      } else {
        return ''
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
      // this.$refs.autocomplete.classList.add('custom-show')
      this.onAutocompleteClick()
    },
    clearIconClickHandler () {
      this.model = ''
      this.$emit('input', this.model)
      this.onClearIconClick()
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
      this.onDropdownItemClick(item)
    }
  }
}
</script>

<style scoped>
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

.custom-dropdown-button {
  margin-left: 18px;
}

.custom-autocomplete-icon {
  cursor: pointer;
}

.custom-validation-error {
  border-color: #dc3545!important;
}
</style>
