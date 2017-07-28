<template lang="pug">
  #app
    header.page-header
      h1 Heading
      img(ref="logo_img" src="./assets/logo.png", alt="Vue")
    main.page-main
      p {{ logo_alternate_text }}
    footer.page-footer
</template>

<script>
export default {
  name: 'app',
  mounted () {

    // DOM 스크립트 스타일
    // let app = this.$el;
    // this.logo_alternate_text = app.querySelector('img').getAttribute('alt');

    // VueJS ref 속성 사용
    // HTML_DOM 방식 사용
    this.logo_alternate_text = this.$refs.logo_img.alt;
    // this.logo_src = this.$refs.logo_img.src;

    // jQuery 스타일
    // this.logo_src = $(this.$refs.logo_img).attr('src');

  },
  data () {
    return {
      logo_alternate_text: '',
      logo_src: ''
    }
  }
}
</script>

<style lang="sass">
  @import "~yamoo9"

  html
    font-size: 100%
    background: #fff
  body
    margin: 0
    +size(100vw 80vh)
</style>
