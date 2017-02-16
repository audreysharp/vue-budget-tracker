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
      console.log('Budget -> mounted.')
      // this.$evt.$on('clear', this.clear)
    },

    beforeDestroy() {
      console.log('Budget -> beforeDestroy.')
      // this.$evt.$off('clear', this.clear)
    },

    props: [
      'budget'
    ],

    data() {
      return {
        title: this.budget.title,
        amount: this.budget.max,
        note: this.budget.note
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
