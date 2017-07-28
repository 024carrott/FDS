<template lang="pug">

  #app

    fds-message
      //- fds-message(heading="알림" class="is-warning")
      //-   p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!

    fds-message(class="is-info")
      h3(slot="heading") 알림
      //- scoped slot을 사용할 경우
      //- template(slot="heading" scope="props")
      //-   h3 {{ props.message }}
      p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!

    fds-modal(ref="my_modal" close_message="close lightbox")
      .image.is-16by9
        img(
          src="//lorempicsum.com/up/1280/720/2"
          alt="animation UP"
        )
      //- .content
        //- h3 VueJS 컴포넌트
        //- p 하이 모달

    button.button.is-info(
      @click="openModal"
    ) Open Modal
</template>

<script>
import FdsMessage from './components/FDS/Message';
import FdsModal from './components/FDS/Modal';

export default {
  name: 'app',
  components: {
    FdsMessage, FdsModal
  },
  methods: {
    openModal(){
      this.$refs.my_modal.visible = true;
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
    width: 80vw
    margin:
      top: 40px
      left: auto
      right: auto
    // text-align: center
</style>
