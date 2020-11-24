<template>
  <div class="treeList">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="item-name">
        <span>{{item.name}}</span>
      </div>
      <div v-if="item.children" class="children-item">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "List",
    props: {
      list: Array
    }
  };
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
