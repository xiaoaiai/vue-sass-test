<template>
  <div>
    <div class="jumbotron">
      <h1 id="step1">HTML in tooltip</h1>
      <p id="step4" class="lead">We're going to use HTML codes in tooltips via Programmatic API</p>
      <a class="btn btn-large btn-success" href="javascript:void(0);" @click="startIntro">Show me how</a>
    </div>

    <hr>

    <div class="row-fluid marketing">
      <div id="step2" class="span6">
        <h4>Section One</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

        <h4>Section Two</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

        <h4>Section Three</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>
      </div>

      <div id="step3" class="span6">
        <h4>Section Four</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>


        <h4>Section Five</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

        <h4>Section Six</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueIntro from 'vue-introjs';
  import 'intro.js/introjs.css';
  Vue.use(VueIntro);

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
        this.$intro().setOptions({
          prevLabel: "上一步",
          nextLabel: "下一步",
          skipLabel: "跳过",
          doneLabel: "完成",
          steps: [
            {
              element: '#step1',
              intro: "This is a <b>bold</b> tooltip."
            },
            {
              element: '#step2',
              intro: "Ok, <i>wasn't</i> that fun?",
            },
            {
              element: '#step3',
              intro: 'More features, more <span style="color: red;">f</span><span style="color: green;">u</span><span style="color: blue;">n</span>.',
            },
            {
              element: '#step4',
              intro: "<span style='font-family: Tahoma'>Another step with new font!</span>",
              position: 'bottom'
            },
            {
              element: '#step5',
              intro: '<strong>Get</strong> it, <strong>use</strong> it.'
            }
          ]
        }).start();
      }
    }
  }
</script>

<style scoped="scoped">

</style>
