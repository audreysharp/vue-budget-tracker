<template>
  <div class="AddTransaction">
    <section>
      <label class="label">Add Transaction</label>
      <div class="control">
        <div class="control is-grouped">
          <input type="text" class="input" placeholder="Transaction Title" v-model="title" /> &nbsp;&nbsp;
          <input type="text" class="input amount" placeholder="Transaction Amount" v-model="amount" onfocus="this.value='$'" @keyup="validateNumber"
          /> &nbsp;&nbsp;
          <span class="select">
            <select v-model="selectedBudget">
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
      'budgets' // budgets array from parent App.vue, to populate budgets dropdown
    ],

    data () {
      return {
        title: '',
        amount: '',
        note: '',
        selectedBudget: this.budgets[0].title
      }
    },

    methods: {
      validateNumber () { // ensure that user has entered a number into textbok
        if (isNaN(parseInt(this.amount.substring(1)))) {
          document.getElementsByClassName('amount')[0].classList.add('is-danger')
        } else {
          document.getElementsByClassName('amount')[0].classList.remove('is-danger')
        }
      },

      addTransaction () {
        if (isNaN(parseInt(this.amount.substring(1))) || this.selectedBudget === '') {
          return
        }
        console.log('Transaction -> addTransaction')
        this.$evt.$emit('addTransaction', {
          title: this.title,
          amount: parseInt(this.amount.substring(1)),
          note: this.note,
          budget: this.selectedBudget
        })
        this.reset()
      },

      reset () {
        this.title = ''
        this.amount = ''
        this.note = ''
        this.selectedBudget = this.budgets[0].title
      }
    }
  }

</script>

<style>
</style>
