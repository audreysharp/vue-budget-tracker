<template>
  <div class="progress">
    <progress class="progress is-large" value=10 max="100">
      <p>Hello</p>
    </progress>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        default: 'Unnamed'
      },
      max: {
        required: true,
        default: '$50'
      },
      progress: {
        required: false,
        default: '$0'
      }
    },
    data() {
      return {
        name: '',
        max: '',
        progress: ''
      }
    }

  }

</script>
<style>
  . {}

</style>
