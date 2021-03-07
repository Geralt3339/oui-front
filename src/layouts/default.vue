<template lang="pug">
  div(class="container custom-app")
    div.main-title
      h1.font-weight-bold.page-title.text-primary The Open University of Israel.
      h2.font-weight-bold.page-title-2.text-secondary Student Community.
    div.container.mt-5
      slot
</template>

<style>
.custom-app {
  background: url('../assets/img/oui-logo.png') no-repeat;
  background-size: 300px;
  background-position: right top;
  background-position-y: 15px;
  height: 100vh;
}
</style>
