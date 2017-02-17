<template>
  <div>
    <article class="message">
      <div class="message-header">
        <p>{{ transaction.title }}</p>
        <button class="delete" @click="deleteTransaction" transition="fade"></button>
      </div>
      <div class="message-body">
        <b>Budget</b>: {{ transaction.budget }} <br>
        <b>Amount</b>: ${{ transaction.amount }} <br> {{ transaction.note }}
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log('Transaction -> mounted.')
    },

    beforeDestroy () {
      console.log('Transaction -> beforeDestroy.')
    },

    props: [
      'transaction'
    ],

    methods: {
      deleteTransaction () {
        console.log('Transaction -> delete.')
        this.$evt.$emit('deleteTransaction', this.transaction)
      }
    }

  }

</script>

<style scoped>
  .delete {
    visibility: hidden;
  }
  
  .message:hover .delete {
    visibility: visible;
  }
</style>
