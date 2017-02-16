<template>
  <div class="message is-grouped">
    <div class="message-header">
      <p>{{ budget.title }}</p>
      <p>Progress: ${{ budget.progress }} / ${{ budget.max }}</p>
    </div>
    <div class="message-body">
      <div class="progress">
        <progress :class="classObject" :value=budget.progress :max=budget.max>
        </progress>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'budget'
    ],

    computed: {
      classObject() { // change color of progress bar based on budget progress
        if (this.budget.progress < this.budget.max) {
          return {
            'progress': true,
            'is-large': true
          }
        } else {
          return {
            'progress': true,
            'is-large': true,
            'is-danger': true // turn bar red if they've gone over their budget
          }
        }
      }
    }
  }

</script>
<style>


</style>
