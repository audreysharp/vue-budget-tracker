<template>
  <div class="message is-grouped">
    <div class="message-header">
      <p>{{ budget.title }}</p>
      <p>Progress: ${{ budget.progress }} / ${{ budget.max }}</p>
    </div>
    <div class="message-body">
      <div class="progress">
        <progress class="progress is-large" :value=budget.progress :max=budget.max>
        </progress>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'budget'
    ]
  }

</script>
<style>


</style>
