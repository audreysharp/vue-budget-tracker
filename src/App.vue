<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <Navigation>
      <Tab name="Dashboard" :selected="true">
        <h1>Test1.</h1>
      </Tab>
      <Tab name="Transactions">
        <h1>Test2.</h1>
        <Transaction></Transaction>
      </Tab>
      <Tab name="Budgets">
        <h1>Test3.</h1>
      </Tab>
    </Navigation>
    <!--<br>-->
    <!--<Transaction></Transaction>-->
  </div>
</template>
<script>
  import Transaction from './components/Transaction'
  import Navigation from './components/Navigation'
  import Tab from './components/Tab'
  export default {
    name: 'app',
    components: {
      Transaction,
      Navigation,
      Tab
    },
    data() {
      return {
        transactionNum: 0
      }
    }
  }

</script>
<style>
  #app {
    padding: 25px;
  }

</style>
