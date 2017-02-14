<template>
  <div id="app" v-cloak>
    <!--<router-view></router-view>-->
    <Navigation>
      <Tab name="Dashboard" :selected="true">
        <h1>Test1.</h1>
        <!--<BudgetProgress class="budgetProgress" v-for="(title, max, progress) in budgets "></BudgetProgress>-->
      </Tab>
      <Tab name="Transactions">
        <Search v-model="keyword "></Search>
        <AddTransaction></AddTransaction>
        <br>
        <Transaction class="transactionsClass" v-for="transaction in filteredList" :transaction="transaction"></Transaction>
        <!--<Transaction class="transactionsClass" v-for="transaction in transactions" :transaction="transaction"></Transaction>-->
      </Tab>
      <Tab name="Budgets ">
        <h1>Test3.</h1>
      </Tab>
    </Navigation>
  </div>
</template>
<script>
  import Transaction from './components/Transaction'
  import Navigation from './components/Navigation'
  import Tab from './components/Tab'
  import Search from './components/Search'
  import BudgetProgress from './components/BudgetProgress'
  import AddTransaction from './components/AddTransaction'

  export default {
    name: 'app',

    mounted() {
      console.log('App -> mounted.')
      this.$evt.$on('add', this.transactionAdded)
    },

    beforeDestroy() {
      this.$evt.$off('add', this.transactionAdded)
    },

    components: {
      Transaction,
      Navigation,
      Tab,
      Search,
      BudgetProgress,
      AddTransaction
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
            title: 'Untitled2',
            amount: '$10',
            note: 'Notebook'
          }
        ],
        budgets: []
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
      }
    },
    computed: {
      filteredList() {
        return this.transactions.filter((transactions) => {
          return transactions.title.toLowerCase().includes(this.keyword)
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

</style>
