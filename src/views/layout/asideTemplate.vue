<template>
  <div>
      <sub-menu-template
        :menus="menus"
      ></sub-menu-template>
  </div>
</template>

<script>
import subMenuTemplate from './subMenuTemplate.vue'
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  components: { subMenuTemplate },
  data() {
    return {
      // 如果是真实的路由，使用了vue-router,可用this.$router.option.routes
      menus: [
        {
          icon: 'pie-chart',
          title: 'Option 1',
          path: '1'
        },
        {
          icon: 'desktop',
          title: 'Option 2',
          path: '/HelloWorld'
        },
        {
          icon: 'bank',
          title: 'Option 3',
          path: '3'
        },
        {
          icon: 'mail',
          title: 'Navigation One',
          path: 'sub1',
          children: [
            {
              // icon: 'index',
              title: 'Option 5',
              path: '5'
            },
            {
              // icon: 'index',
              title: 'Option 6',
              path: '6'
            },
            {
              // icon: 'index',
              title: 'Option 7',
              path: '7'
            },
            {
              // icon: 'index',
              title: 'Option 8',
              path: '8',
              children: [
                {
                  // icon: 'index',
                  title: 'Option 13',
                  path: '13'
                },
                {
                  // icon: 'index',
                  title: 'Option 14',
                  path: '14'
                },
                {
                  // icon: 'index',
                  title: 'Option 15',
                  path: '15'
                },
                {
                  // icon: 'index',
                  title: 'Option 16',
                  path: '16',
                  children: [
                    {
                      // icon: 'index',
                      title: 'Option 21',
                      path: '21'
                    },
                    {
                      // icon: 'index',
                      title: 'Option 22',
                      path: '22'
                    }
                  ],
                }
              ],
            }
          ],
        },
        {
          icon: 'appstore',
          title: 'Navigation Two',
          path: 'sub2',
          children: [
            {
              // icon: 'index',
              title: 'Option 9',
              path: '9'
            },
            {
              // icon: 'index',
              title: 'Option 10',
              path: '10'
            },
            {
              // icon: 'index',
              title: 'Option 11',
              path: '11'
            },
            {
              // icon: 'index',
              title: 'Option 12',
              path: '12',
              children: [
                {
                  // icon: 'index',
                  title: 'Option 17',
                  path: '17'
                },
                {
                  // icon: 'index',
                  title: 'Option 18',
                  path: '18'
                },
                {
                  // icon: 'index',
                  title: 'Option 19',
                  path: '19'
                },
                {
                  // icon: 'index',
                  title: 'Option 20',
                  path: '20'
                }
              ],
            }
          ],
        },
      ]
    }
  },
  created () {
    this.menus = this.$router.options.routes[0].children
  }
}
</script>
