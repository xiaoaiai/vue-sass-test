<template>
  <div class="main">
    <a class="btn btn-large btn-success" href="javascript:void(0);" @click="startIntro">Show me how</a>
    <div class="w1">
      jQuery插件库LOGO，点击 <br> <br>  这里可以跳转到网站首页。
    </div>
    <div class="w2">
      第二部 <br> <br>  演示
    </div>
    <div id="walkthrough-2">
      jQuery插件库LOGO，点击这里可以跳转到网站首页。
    </div>
    <div class="w3">
      第三部 <br> <br>  演示
    </div>
    <div id="walkthrough-3">
      第二部演示
    </div>
    <div class="w4">
      第四部 <br> <br>  演示
    </div>
    <div id="walkthrough-4">
      第三部演示
    </div>
    <div id="walkthrough-5">
      第四部演示
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import './utils/jquery.pagewalkthrough';

  export default {
    data () {
      return {

      }
    },
    mounted () {
      // this.startIntro()
    },
    methods: {
      startIntro() {
        // 设置参数
        $('.main').pagewalkthrough({
          name: 'introduction',
          steps: [
            {
              popup: { //定义弹出提示引导层
                content: '#walkthrough-1',
                type: 'modal'
              }
            },
            {
              wrapper: '.w1',
              //当前引导对应的元素位置
              popup: {
                content: '#walkthrough-2',
                //关联的内容元素
                type: 'tooltip',
                //弹出方式（tooltip和modal以及nohighlight）
                position: 'bottom' //弹出层位置（top,left, right or bottom）
              }
            },
            {
              wrapper: '.w2',
              popup: {
                content: '#walkthrough-3',
                type: 'tooltip',
                position: 'bottom'
              }
            },
            {
              wrapper: '.w3',
              popup: {
                content: '#walkthrough-4',
                type: 'tooltip',
                position: 'top'
              }
            },
            {
              wrapper: '.w4',
              popup: {
                content: '#walkthrough-5',
                type: 'tooltip',
                position: 'top'
              }
            }
          ],
          buttons: {
            jpwClose: {
              i18n: "点击关闭"
            },
            jpwNext: {
              i18n: "下一步"
            },
            jpwPrevious: {
              i18n: "上一步"
            },
            jpwFinish: {
              i18n: "完成"
            }
          },
          onClose: function(){
            console.log('关闭')
          }
        });
        // 一步一步显示引导页
        $('.main').pagewalkthrough('show');
      }
    }
  }
</script>

<style>
 @import './utils/jquery.pagewalkthrough.css';
 [id*="walkthrough"] {
   display: none;
 }
</style>
