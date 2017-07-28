<template lang="pug">

  #app

    button.open-modal.button(@click="openModal") {{ 'Open Modal' | uppercase }}

    fds-message
      //- fds-message(heading="알림" class="is-warning")
      //-   p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!

    fds-message(class="is-info")
      h3(slot="heading") 알림
      //- scoped slot을 사용할 경우
      //- template(slot="heading" scope="props")
      //-   h3 {{ props.message }}
      p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!

    fds-message
      h3(slot="heading") 통화 변경
      p 오늘 특가 이벤트! {{ 300 | currency('$') }}에 모십니다.

    fds-modal(
      ref="my_modal"
      close_message="close lightbox"
    )
      .image.is-16by9
        img(
          src="//lorempicsum.com/up/1280/720/2"
          alt="animation UP"
        )
      //- .content
        //- h3 VueJS 컴포넌트
        //- p 하이 모달
</template>

<script>
  import FdsMessage from './components/FDS/Message';
  import FdsModal from './components/FDS/Modal';

  export default {
    name: 'app',
    components: {
      FdsMessage, FdsModal
    },
    filters: {
      currency: (value, sign="원") => {
        if ( sign !== '원' ) {
          return sign + value;
        } else {
          return value + sign;
        }
      }
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

  .open-modal
    margin-bottom: 20px
</style>
