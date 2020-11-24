<template>
  <a-config-provider :locale="locale">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
        :style="!collapsed ? {flex: '0 0 256px','max-width': '256px'}: {}"
      >
        <div class="logo"></div>
        <aside-template :collapsed="collapsed"></aside-template>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-radio-group :default-value="null" style="position: absolute;right: 20px;top:15px;" @change="changeLocale">
            <a-radio-button key="en" :value="null">
              English
            </a-radio-button>
            <a-radio-button key="cn" :value="zhCN">
              中文
            </a-radio-button>
          </a-radio-group>
        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view/>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-config-provider>
</template>
<script>
  import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
  import asideTemplate from './asideTemplate.vue'
  import HeaderComponent from './header.vue'
  import FooterComponent from './footer.vue'
  export default {
    name: 'basicPage',
    components: {
      asideTemplate,
      HeaderComponent,
      FooterComponent
    },
    data () {
      return {
        collapsed: false,
        zhCN,
        locale: null
      }
    },
    methods: {
      changeLocale(e) {
        const localeValue = e.target.value
        this.locale = localeValue
      }
    }
  }
</script>

<style>

  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    float: left;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  #components-layout-demo-custom-trigger .ant-layout-sider{
    height: 100%;
    overflow: auto;
  }
</style>

