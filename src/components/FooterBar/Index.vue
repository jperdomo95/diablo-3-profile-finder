<template>
  <div class="footer-bar mt-5">
    <powered-by-foot :icons="icons"/>

    <hr class="my-5">

    <div class="row">
      <div class="col-sm-6 mb-sm-6 mb-5">
        <foot-links/>
      </div>
    </div>
    <div class="col-sm-6">
      <made-by-foot/>
    </div>
  </div>
</template>

<script>
import MadeByFoot from './MadeByFoot'
import PoweredByFoot from './PoweredByFoot'
import FootLinks from './FootLinks'

export default {
  name: 'FooterBar',
  components: { FootLinks, PoweredByFoot, MadeByFoot },
  data () {
    return {
      icons: [
        {
          classes: ['fab', 'vuejs'],
          color: '#4fc08d',
          href: 'https://vuejs.org'
        },
        {
          classes: ['fab', 'bootstrap'],
          color: '#7952b3',
          href: 'https://bootstrap-vue.js.org/'
        },
        {
          classes: ['fab', 'battle-net'],
          href: 'https://develop.battle.net/documentation/diablo-3/community-apis/'
        },
        {
          classes: ['fab', 'github'],
          color: '#e4e4e4',
          href: 'https://github.com/baumannzone'
        },
        {
          classes: ['fab', 'font-awesome'],
          color: '#0e95ff',
          href: 'https://fontawesome.com/'
        }
      ]
    }
  }
}
</script>
