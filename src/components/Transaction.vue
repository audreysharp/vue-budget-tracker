<template>
  <div>
    <article class="message">
      <div class="message-header">
        <p>{{ title }}</p>
        <button class="delete"></button>
      </div>
      <div class="message-body">
        <b>Amount</b>: {{ amount }}
        <br> {{ note }}
      </div>
    </article>
  </div>
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

    props: [
      'transaction'
    ],

    data() {
      return {
        title: this.transaction.title,
        amount: this.transaction.amount,
        note: this.transaction.note
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
  .message {
    margin: 10px;
  }
  
  .delete {
    visibility: hidden;
  }
  
  .message:hover .delete {
    visibility: visible;
  }

</style>
