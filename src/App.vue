<template>
  <div id="app">
    <load-layout v-if="isLoading">
      <base-loading></base-loading>>
    </load-layout>
    <main-layout v-else/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import LoadLayout from './layouts/LoadLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import BaseLoading from '@/components/BaseLoading.vue'
export default {
  name: 'App',
  components: {
    LoadLayout,
    MainLayout,
    BaseLoading
  },
  computed: {
    ...mapState('loading', {
      isLoading: 'isLoading'
    })
  }
}
</script>

<style lang="stylus">
#app
  padding 60px 0
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #fff
  background #15202b
</style>
