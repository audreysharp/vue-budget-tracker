<template>
  <div>
    <article class="message">
      <div class="message-header">
        <p>{{ budget.title }}</p>
        <button class="delete" @click="deleteBudget" transition="fade"></button>
      </div>
      <div class="message-body">
        <b>Max Goal</b>: ${{ budget.max }}
        <br>
        <li class="items" v-for="item in budget.items">
          {{ item.title }} - ${{ item.amount }}
        </li>
      </div>
    </article>
  </div>
</template>
<script>
  export default {
    mounted() {
      console.log('Budget -> mounted.')
    },

    beforeDestroy() {
      console.log('Budget -> beforeDestroy.')
    },

    props: [
      'budget'
    ],

    methods: {
      deleteBudget() {
        console.log('Budget -> delete.')
        this.$evt.$emit('deleteBudget', this.budget)
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
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  
  .items {
    padding-left: 20px;
  }

</style>
