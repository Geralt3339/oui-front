<template lang="pug">
  div.media.mb-4
    img.rounded.mr-3(src="https://image.shutterstock.com/image-vector/algebra-concept-icon-algebraic-equations-600w-1426615184.jpg")
    div.media-body
      h5 {{ group.name }}
      form(@submit.prevent="joinGroup")
        button.btn.btn-sm.mr-2(:class="group.messenger_id === 'whatsapp' ? 'btn-success' : 'btn-primary'" type="submit") #[i.fab(:class="group.messenger_id === 'whatsapp' ? 'fa-whatsapp' : 'fa-telegram'")] Join
      //- button.btn.btn-sm.btn-outline-secondary Group is full
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      default () {
        return {}
      }
    }
  },

  methods: {
    joinGroup () {
      window.open(this.group.join_url, '_blank')
    }
  }
}
</script>

<style scoped>
img {
  max-width: 4em;
}
</style>
