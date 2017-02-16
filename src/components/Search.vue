<template>
  <div class="control has-addons has-addons-right">
    <input class="input is-expanded" type="text" placeholder="Search for a transaction..." @keyup="filterTransactions" v-model="keyword">
    <a class="button is-primary">
      Search
    </a>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        keyword: '',
      }
    },

    methods: {
      filterTransactions() {
        this.$evt.$emit('filterTransactions', this.keyword)
      }
    }

  }

</script>
<style>


</style>
