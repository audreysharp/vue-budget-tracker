<template>
  <div class="AddTransaction">
    <section>
      <label class="label">Add Transaction</label>
      <div class="control">
        <div class="control is-grouped">
          <input type="text" class="input" placeholder="Transaction Title" v-model="title" /> &nbsp;&nbsp;
          <input type="text" class="input" placeholder="Transaction Amount" v-model="amount" onfocus="this.value='$'" />&nbsp;&nbsp;
          <span class="select">
            <select v-model="selectedBudget">
              <option hidden disabled value="">Choose budget...</option>
              <option v-for="budget in budgets" :value=budget.title>{{ budget.title }}</option>
            </select>
        </span>
        </div>
        <div class="control is-grouped ">
          <input type="text" class="input" placeholder="Transaction Note" v-model="note" />&nbsp;&nbsp;
          <a class="button is-primary" @click="addTransaction">Add</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {

    props: [
      'budgets' // budgets array from parent, for budgets dropdown
    ],

    data() {
      return {
        title: '',
        amount: '',
        note: '',
        selectedBudget: ''
      }
    },

    methods: {
      addTransaction() {
        console.log('Transaction -> addTransaction');
        this.$evt.$emit('addTransaction', {
          title: this.title,
          amount: this.amount,
          note: this.note,
          budget: this.selectedBudget
        })
        this.reset()
      },
      reset() {
        this.title = ''
        this.amount = ''
        this.note = ''
        this.selectedBudget = ''
      }
    }
  }

</script>
<style>


</style>
