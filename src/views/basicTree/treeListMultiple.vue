<template>
  <div class="treeList">
    <list :list="list"></list>
  </div>
</template>
<script>
  import List from "./components/List";
  export default {
    name: "Parent",
    components: { List },
    data() {
      return {
        list: [{
          name: "1",
          children: [{
            name: "1-1",
            children: [
              {
               name: "1-1-1"
              },
              {
                name: "1-1-2"
              }
            ]
          },{
            name: "1-2",
            children: [
              {
                name: "1-2-1"
              },
              {
                name: "1-2-2"
              }]
          }]
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .treeList{
    text-align: left;
    .children-item {
      padding-left: 30px;
    }
    .list-item{
      color: #666666;
    }
  }
</style>
