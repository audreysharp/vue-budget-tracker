<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Welcome to the budget tracker!</p>
        <button class="delete" @click="hideModal"></button>
      </header>
      <section class="modal-card-body">
        <h3><b>Dashboard</b></h3>
        This tab displays a progress tracker for each of your budgets.<br><br>

        <h3><b>Transactions</b></h3>
        This tab displays your transactions. This is where you add a transaction.  You can also search
        for a specific transaction.<br>

        <i>Adding Transactions</i>: When adding a transaction, be sure to choose what budget it belongs to.  By default,
        the application will add the transaction to the first budget in the list.<br><br>

        <h3><b>Budgets</b></h3>
        This tab displays your budgets.  It will also show the transactions you've added categorized under the budgets.<br>
        <i>Adding Budgets</i>: Add budgets to be able to track your transactions.
      </section>
      <footer class="modal-card-foot"></footer>
    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
      console.log('Modal -> mounted.')
    },

    beforeDestroy () {
      console.log('Modal -> beforeDestroy.')
    },
    methods: {
      hideModal () {
        console.log('Modal -> hideModal')
        this.$evt.$emit('hideModal')
      }
    }
  }
</script>

<style>
.modal {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 60px;
  display: inline
}
</style>
