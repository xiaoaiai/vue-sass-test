<template>
  <a-menu
    :default-selected-keys="[$route.path]"
    mode="inline"
    theme="dark"
    @click="menuClick"
  >
    <template v-for="(item) in menus">
      <a-menu-item :key="item.path" v-if="!item.children">
        <a-icon :type="item.icon"  v-if="item.icon"/>
        <span>{{item.title}}</span>
      </a-menu-item>
      <template v-else>
        <sub-menu
          :menuInfo="item"
        ></sub-menu>
      </template>
    </template>
  </a-menu>
</template>

<script>
  import { Menu } from 'ant-design-vue';
  // 定义函数式组件
  const SubMenu = {
    template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon :type="menuInfo.icon" v-if="menuInfo.icon"/>
          <span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <a-icon :type="item.icon"  v-if="item.icon"/>
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
    name: 'SubMenu',
    // must add isSubMenu: true 此项必须被定义
    isSubMenu: true,
    props: {
      // 解构a-sub-menu的属性，也就是文章开头提到的为什么使用函数式组件
      ...Menu.SubMenu.props,
      // 接收父级传递过来的菜单信息
      menuInfo: {
        type: Object,
        default: () => ({}),
      },
    },
  };
  export default {
    props: {
      menus: {
        type: Array,
        default: () => []
      }
    },
    components: { SubMenu },
    data() {
      return {
      }
    },
    created() {
      console.log('menus', this.menus)
    },
    methods: {
      // 点击菜单，路由跳转,注意的是当点击MenuItem才会触发此函数
      menuClick({ item, key, keyPath }) {
        // 获取到当前的key,并且跳转
        this.$router.push({
          path: key
        })
      }
    }
  }
</script>

