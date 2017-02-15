<template>
  <div class="message is-grouped">
    <div class="message-header">
      <p>{{ title }}</p>
      <p>Progress: ${{ progress }} / ${{ max }}</p>
    </div>
    <div class="message-body">
      <div class="progress">
        <progress class="progress is-large" :value=progress :max=max>
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
    data() {
      return {
        title: this.budget.title,
        max: this.budget.max,
        progress: this.budget.progress
      }
    }

  }

</script>
<style>
  . {}

</style>
