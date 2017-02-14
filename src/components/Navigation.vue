<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        tabs: []
      }
    },

    created() {
      this.tabs = this.$children
    },

    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => { // avoid mutating a property directly; use data or property
          tab.isActive = (tab.name == selectedTab.name);
        })
      }
    }

  }

</script>
<style>
  .nav-left {
    border-color: purple;
  }

</style>
