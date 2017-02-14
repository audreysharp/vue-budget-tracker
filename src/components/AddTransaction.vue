<template>
  <div class="AddTransaction">
    <section>
      <label class="label">Add Transaction</label>
      <div class="control">
        <div class="control is-grouped">
          <input type="text" class="input" placeholder="Transaction Title" v-model="title" /> &nbsp;&nbsp;
          <input type="text" class="input" placeholder="Transaction Amount" v-model="amount" onfocus="this.value='$'" />
        </div>
        <div class="control is-grouped ">
          <input type="text" class="input" placeholder="Transaction Note" v-model="note" />&nbsp;&nbsp;
          <a class="button is-primary" @click="add">Add</a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        title: '',
        amount: '',
        note: ''
      }
    },

    methods: {
      add() {
        console.log('Transaction -> add');
        this.$evt.$emit('add', {
          title: this.title,
          amount: this.amount,
          note: this.note
        })
        this.reset()
      },
      reset() {
        this.title = ''
        this.amount = ''
        this.note = ''
      }
    }
  }

</script>
<style>
  . {}

</style>
