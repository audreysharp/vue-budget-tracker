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
  import Transaction from './components/Transaction'
  import Navigation from './components/Navigation'
  import Tab from './components/Tab'
  import Search from './components/Search'
  import Budget from './components/Budget'
  import BudgetProgress from './components/BudgetProgress'
  import BudgetForm from './components/BudgetForm'
  import TransactionForm from './components/TransactionForm'

  export default {
    name: 'app',

    mounted() {
      console.log('App -> mounted.')
      this.$evt.$on('addTransaction', this.transactionAdded)
      this.$evt.$on('deleteTransaction', this.transactionDeleted)
      this.$evt.$on('addBudget', this.budgetAdded)
      this.$evt.$on('filterTransactions', this.updateKeyword)
    },

    beforeDestroy() {
      this.$evt.$off('addTransaction', this.transactionAdded)
      this.$evt.$off('deleteTransaction', this.transactionDeleted)
      this.$evt.$off('addBudget', this.budgetAdded)
      this.$evt.$off('filterTransactions', this.filterTransactions)
    },

    components: {
      Transaction,
      Navigation,
      Tab,
      Search,
      Budget,
      BudgetProgress,
      BudgetForm,
      TransactionForm
    },
    data() {
      return {
        keyword: '',
        transactions: [{
            title: 'Untitled',
            amount: '$5',
            note: 'Food'
          },
          {
            title: 'Test',
            amount: '$10',
            note: 'Notebook'
          },
          {
            title: 'Test2',
            amount: '$500',
            note: 'iPad'
          },
          {
            title: 'iPad',
            amount: '$10000',
            note: 'For birthday'
          }
        ],
        budgets: [{
            title: 'Food',
            max: '50',
            progress: '10'
          },
          {
            title: 'Clothes',
            max: '100',
            progress: '10'
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
          note: data.note
        })
      },
      transactionDeleted(data) {
        console.log('App -> transactionDeleted', data)
        this.transactions.splice(this.transactions.indexOf(data), 1)
      },
      budgetAdded(data) {
        console.log('App -> budgetAdded', data)
        this.transactions.push({
          title: data.title,
          amount: data.amount,
        })
      },
      updateKeyword(data) {
        this.keyword = data
      }
    },
    computed: {
      filteredList() {
        return this.transactions.filter((transaction) => {
          return transaction.title.toLowerCase().includes(this.keyword)
        })
      }
    }
  }

</script>
<style>
  #app {
    padding: 25px;
  }
  
  [v-cloak] {
    display: none;
  }
  
  .message {
    margin: 10px;
  }

</style>
