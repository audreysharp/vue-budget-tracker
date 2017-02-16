<template>
  <div>
    <article class="message">
      <div class="message-header">
        <p>{{ budget.title }}</p>
        <button class="delete" @click="deleteTransaction" transition="fade"></button>
      </div>
      <div class="message-body">
        <b>Amount</b>: {{ budget.amount }}
        <br> {{ budget.note }}
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

    methods: {
      deleteTransaction() {
        console.log('Budget -> delete.')
        this.$evt.$emit('deleteTransaction', this.budget)
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
