<template>
  <div id="app" v-cloak>
    <!--<router-view></router-view>-->
    <Navigation>
      <Tab name="Dashboard" :selected="true">
        <BudgetProgress class="budgetProgress" v-for="budget in budgets" :budget="budget"></BudgetProgress>
      </Tab>
      <Tab name="Transactions">
        <Search></Search>
        <TransactionForm :budgets="budgets"></TransactionForm>
        <br>
        <Transaction class="transactionsClass" v-for="transaction in filteredList" :transaction="transaction"></Transaction>
        <!--<Transaction class="transactionsClass" v-for="transaction in transactions" :transaction="transaction"></Transaction>-->
      </Tab>
      <Tab name="Budgets">
        <BudgetForm></BudgetForm>
        <br>
        <Budget class="budgetsClass" v-for="budget in budgets" :budget="budget"></Budget>
      </Tab>
    </Navigation>
  </div>
</template>
<script>
  import Navigation from './components/Navigation'
  import Tab from './components/Tab'
  import Search from './components/Search'
  import Transaction from './components/Transaction'
  import TransactionForm from './components/TransactionForm'
  import Budget from './components/Budget'
  import BudgetProgress from './components/BudgetProgress'
  import BudgetForm from './components/BudgetForm'

  export default {
    name: 'app',

    mounted() {
      console.log('App -> mounted.')
      this.$evt.$on('addTransaction', this.transactionAdded)
      this.$evt.$on('deleteTransaction', this.transactionDeleted)
      this.$evt.$on('addBudget', this.budgetAdded)
      this.$evt.$on('deleteBudget', this.budgetDeleted)
      this.$evt.$on('filterTransactions', this.updateKeyword)
    },

    beforeDestroy() {
      this.$evt.$off('addTransaction', this.transactionAdded)
      this.$evt.$off('deleteTransaction', this.transactionDeleted)
      this.$evt.$off('addBudget', this.budgetAdded)
      this.$evt.$off('deleteBudget', this.budgetDeleted)
      this.$evt.$off('filterTransactions', this.filterTransactions)
    },

    components: {
      Navigation,
      Tab,
      Search,
      Transaction,
      TransactionForm,
      Budget,
      BudgetProgress,
      BudgetForm
    },
    data() {
      return {
        searchKeyword: '',
        transactions: [
          /*{
                      title: 'Chips',
                      amount: 2,
                      note: 'For lunch, from Subway',
                      budget: 'Food'
                    },
                    {
                      title: 'Dress',
                      amount: 10,
                      note: 'Dress from Forever 21',
                      budget: 'Clothes'
                    },
                    {
                      title: 'Water bottle',
                      amount: 6,
                      note: 'From CVS',
                      budget: 'Food'
                    },*/
        ],
        budgets: [{
            title: 'Food',
            max: 500,
            progress: 0,
            items: []
          },
          {
            title: 'Clothes',
            max: 100,
            progress: 0,
            items: []
          }
        ]
      }
    },
    methods: {
      transactionAdded(data) {
        console.log('App -> transactionAdded', data)
        this.transactions.push({
          title: data.title,
          amount: data.amount,
          note: data.note,
          budget: data.budget
        })
        this.addToBudget(this.transactions[this.transactions.length - 1]) // since using push(), item will always be added to end of array
      },
      transactionDeleted(data) {
        console.log('App -> transactionDeleted', data)
        this.transactions.splice(this.transactions.indexOf(data), 1)
        var budgetsIndex = 0
        // traverse through budgets array and remove the corresponding transaction
        for (var i = 0; i < this.budgets.length; i++) {
          if (this.budgets[i].title === data.budget) {
            this.budgets[i].items.splice(this.budgets[i].items.indexOf(data), 1)
            this.budgets[i].progress -= data.amount
          }
        }
      },
      budgetAdded(data) {
        console.log('App -> budgetAdded', data)
        this.budgets.push({
          title: data.title,
          max: data.max,
          progress: 0,
          items: []
        })
      },
      budgetDeleted(data) {
        console.log('App -> budgetDeleted', data)
        this.budgets.splice(this.budgets.indexOf(data), 1)
      },
      updateKeyword(data) {
        this.searchKeyword = data
      },

      addToBudget(transaction) {
        var index = 0
        for (var i = 0; i < this.budgets.length; i++) {
          if (this.budgets.title === transaction.budget) {
            index = i
            break
          }
        }
        this.budgets[index].progress += transaction.amount
        this.budgets[index].items.push(transaction)
      }
    },
    computed: {
      filteredList() {
        return this.transactions.filter((transaction) => {
          return transaction.title.toLowerCase().includes(this.searchKeyword)
        })
      }
    }
  }

</script>
<style>
  #app {
    padding: 50px;
    padding-top: 20px;
  }
  
  [v-cloak] {
    display: none;
  }
  
  .message {
    margin: 10px;
  }

</style>
