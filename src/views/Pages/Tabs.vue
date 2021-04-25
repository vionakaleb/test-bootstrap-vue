<template lang="html">
  <div :class='{"tabs__light": mode === "light", "tabs__dark": mode === "dark"}'>
    <ul class='tabs__header'>
      <li v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        :class='{"tab__selected": (index == selectedIndex)}'>
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'light'
    }
  },
  data () {
    return {
      selectedIndex: 0, // the index of the selected tab,
      tabs: []         // all of the tabs
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="css">

  ul.tabs__header {
    display: block;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
  }

  ul.tabs__header > li {
    padding: 15px 30px;
    border-radius: 2px;
    margin: 0;
    display: inline-block;
    margin-right: 5px;
    cursor: pointer;
  }

  ul.tabs__header > li.tab__selected {
    font-weight: bold;
    border-radius: 2px;
    border-bottom: 8px solid transparent;
  }

  .tab {
    display: inline-block;
    color: black;
    padding: 20px;
    min-width: 800px;
    border-radius: 2px;
    min-height: 400px;
  }

  .tabs__light .tab{
    background-color: #fff;
    border: 1px #000 solid;
  }

  .tabs__light li {
    background-color: #ddd;
    color: #aaa;
    border: 1px #000 solid;
  }

  .tabs__light li.tab__selected {
    background-color: #fff;
    color: #000;
    border: 1px #000 solid;
  }

</style>