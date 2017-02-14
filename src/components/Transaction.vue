<template>
  <article class="message">
    <div class="message-header">
      <p>Hello World</p>
      <button class="button">Edit</button>
      <button class="delete"></button>
    </div>
    <div class="message-body">
      Transaction: {{ amount }}
    </div>
  </article>
</template>
<script>
  export default {
    mounted() {
      console.log('Transaction -> mounted.')
      // this.$evt.$on('clear', this.clear)
    },

    beforeDestroy() {
      console.log('Transaction -> beforeDestroy.')
      // this.$evt.$off('clear', this.clear)
    },

    data() {
      return {
        name: '',
        text: '',
        amount: '$0'
      }
    },

    methods: {
      delete() {
        console.log('Transaction -> delete.')

      },
      edit() {

      }
    }

  }

</script>
<style>
  .Transaction {}

</style>
