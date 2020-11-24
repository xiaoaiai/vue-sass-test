<template>
  <div class="treeList">
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="item-name">
        <span>{{item.name}}</span>
      </div>
      <div v-if="item.children" class="children-item">
        <div v-for="(child, index) in item.children" :key="index">
          <div class="item-name">
            <span>{{child.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'treeList',
    data () {
      return {
        list: [{
          name: "1",
          children: [{
            name: "1-1"
          }, {
            name: "1-2"
          }]
        }, {
          name: "2",
          children: [{
            name: "2-1"
          }, {
            name: "2-2"
          }]
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
