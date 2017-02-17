<template>
  <div class="add">
    <section>
      <label class="label">Add Budget</label>
      <div class="control">
        <div class="control is-grouped">
          <input type="text" class="input" placeholder="Budget Title" v-model="title" /> &nbsp;&nbsp;
          <input type="text" class="input" placeholder="Budget Amount" v-model="max" onfocus="this.value='$'" @keyup="validateNumber"
          /> &nbsp;&nbsp;
          <a class="button is-primary" @click="addBudget">Add</a>
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
        max: '',
      }
    },

    methods: {
      validateNumber() {
        if (isNaN(parseInt(this.max.substring(1)))) {
          document.getElementsByClassName("amount")[0].classList.add('is-danger')
        } else {
          document.getElementsByClassName("amount")[0].classList.remove('is-danger')
        }
      },

      addBudget() {
        if (isNaN(parseInt(this.max.substring(1)))) {
          return
        }
        console.log('Budget -> addBudget');
        this.$evt.$emit('addBudget', {
          title: this.title,
          max: parseInt(this.max.substring(1)), // remove dollar sign and convert to int
        })
        this.reset()
      },

      reset() {
        this.title = ''
        this.max = ''
      }
    }
  }
</script>

<style>
</style>
