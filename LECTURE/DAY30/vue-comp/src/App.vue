<template lang="pug">

  #app
    fds-message(class="is-primary")
    //- fds-message(heading="알림" class="is-warning")
    //-   p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!
    fds-message(class="is-warning")
      h3(slot="heading") 알림

      //- scoped slot을 사용할 경우
      //- template(slot="heading" scope="props")
      //-   h3 {{ props.message }}

      p 오늘은 우리 수업의 마지막 날입니다. 행쇼~!

</template>

<script>
import FdsMessage from './components/FDS/Message';

export default {
  name: 'app',
  components: {
    FdsMessage
  },
  data () {
    return {

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
