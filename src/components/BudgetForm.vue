<template>
  <div class="add">
    <section>
      <label class="label">Add Budget</label>
      <div class="control">
        <div class="control is-grouped">
          <input type="text" class="input" placeholder="Budget Title" v-model="title" /> &nbsp;&nbsp;
          <input type="text" class="input" placeholder="Budget Amount" v-model="amount" onfocus="this.value='$'" /> &nbsp;&nbsp;
          <a class="button is-primary" @click="addBudget">Add</a>
        </div>
        <!--<div class="control is-grouped ">
          <input type="text" class="input" placeholder="Transaction Note" v-model="note" />&nbsp;&nbsp;
          <a class="button is-primary" @click="addBudget">Add</a>
        </div>-->
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
      }
    },

    methods: {
      addBudget() {
        console.log('Budget -> addBudget');
        this.$evt.$emit('addBudget', {
          title: this.title,
          amount: this.amount,
        })
        this.reset()
      },
      reset() {
        this.title = ''
        this.amount = ''
      }
    }
  }

</script>
<style>
  . {}

</style>
