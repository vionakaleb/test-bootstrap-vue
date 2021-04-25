<template lang="html">
  <div class="wrapper">
    <!-- <button class='change__style' @click='changeStyle()'>Change Style</button> -->
    <tabs class="mt-5">
      <tab title="Tab 1">
        Gingerbread muffin gummies gingerbread macaroon. Lollipop candy applicake toffee faworki. Bear claw topping jelly toffee toffee powder tiramisu candy chupa chups. Chupa chups dragee icing applicake chupa chups dessert. Croissant jelly faworki marzipan tootsie roll marshmallow. Marshmallow toffee sweet roll fruitcake.
      </tab>
      <tab title="Tab 2">
        Chocolate faworki croissant brownie halvah macaroon gummi bears wypas. Chupa chups icing gummies pudding dessert carrot cake. Cupcake jelly beans sweet roll icing ice cream apple pie tootsie roll gummi bears marzipan. Brownie gummies chupa chups pie. Cupcake jujubes topping.
      </tab>
      <tab title="Tab 3">
        Cheesecake jelly beans ice cream lollipop sweet pastry. Chupa chups dessert cheesecake sesame snaps. Cookie ice cream candy canes pastry cake muffin. Icing chocolate sweet gummi bears powder oat cake oat cake lemon drops.
      </tab>
    </tabs>
  </div>
</template>

<script>
import Tab from './Pages/Tab.vue'
import Tabs from './Pages/Tabs.vue'

export default {
  components: {
    Tab,
    Tabs
  },
}
</script>

<style lang="css">
  * {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: #f8f8f8;
    margin: 0;
    padding: 20px;
  }

  .change__style {
    background-color: #eee;
    font-size: 1em;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>