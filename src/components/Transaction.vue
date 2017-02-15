<template>
  <div>
    <article class="message">
      <div class="message-header">
        <p>{{ title }}</p>
        <button class="delete" @click="deleteTransaction" transition="fade"></button>
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
      deleteTransaction() {
        console.log('Transaction -> delete.')
        this.$evt.$emit('deleteTransaction', {
          title: this.title,
          amount: this.amount,
          note: this.note
        })
      },
      edit() {

      }
    }

  }

</script>
<style>
  .delete {
    visibility: hidden;
  }
  
  .message:hover .delete {
    visibility: visible;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

</style>
