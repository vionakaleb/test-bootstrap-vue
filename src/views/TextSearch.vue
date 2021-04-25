<template lang="html">
  <div id="instant_search">
    <div class="mt-5 p-5">
      <input v-model="searchText">
      <div v-if="items">
        <ul>
          <li v-for="item in itemsSearched">{{ item }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    type: {
      type: String,
    }
  },
  data() {
    return {
      items: [
        "Turtles are reptiles of the order Chelonii[2] or Testudines characterised by a special bony or cartilaginous shell developed from their ribs and acting as a shield.[3] 'Turtle' may either refer to the order as a whole, or to particular turtles which make up a form taxon that is not monophyletic.", 
        "The order Chelonii or Testudines", 
        "includes both extant (living) and extinct species. The earliest known turtles date from 220 million years ago,[4] making turtles one of the oldest reptile groups and a more ancient group than lizards, snakes or crocodiles. Of the many species alive today, some are highly endangered.[5]", 
        "Like all other extant reptiles", 
        "turtles are ectotherms their internal temperature varies according to the ambient environment, commonly called cold-blooded. However, because of their high metabolic rate, leatherback sea turtles have a body temperature that is noticeably higher than that of the surrounding water.", 
        "Like other amniotes",
        "(reptiles, dinosaurs, birds, and mammals)",
        "they breathe air and do not lay eggs underwater, although many species live in or around water. The largest turtles are aquatic.", 
      ],
      searchText: ''
    }
  },
  methods: {
  },
  computed : {
      itemsSearched : function(){
        var self = this;
        if( this.searchText == ''){
          return this.items;
        }
        return this.items.filter(function(item){
          return item.indexOf(self.searchText) >= 0;
        });
      }
  },
  filters: {
    searchFilter: function(item) {
     return item.charAt(0) == this.searchText;
   }

  }
};
</script>

<style lang="css">
</style>