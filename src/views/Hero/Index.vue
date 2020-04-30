<template>
  <div>
    <div class="hero-view">
      <base-loading v-if="isLoadingHero"/>
      <hero-detail-header v-if="hero" :detail="detailHeader"/>

      <b-row>
        <!-- 12 columnas de 'xs' -> 'md', 8 columnas desde 'lg' hacia arriba -->
        <!-- En 'lg' orden 2 -->
        <b-col md="12" lg="8" order-lg="2">
          <base-loading v-if="isLoadingItems"/>
          <!-- Componente de Items del personaje -->
          <hero-items v-if="items" :items="items"/>
        </b-col>

        <!-- 12 columnas de 'xs' -> 'md', 4 columnas desde 'lg' hacia arriba -->
        <!-- En 'lg' orden 1 -->
        <b-col md="12" lg="4" order-lg="1">
          <template v-if="hero">
            <hero-attributes :attributes="detailStats"/>
            <hero-skills :skills="hero.skills"/>
          </template>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import BaseLoading from '@/components/BaseLoading'
import HeroDetailHeader from './HeroDetailHeader'
import HeroAttributes from './HeroAttributes/Index'
import HeroItems from './HeroItems/Index'
import HeroSkills from './HeroSkills/Index'
import { getApiHero, getApiDetailedHeroItems } from '@/api/search'

export default {
  name: 'HeroView',
  mixins: [setError],
  components: {
    BaseLoading,
    HeroDetailHeader,
    HeroAttributes,
    HeroItems,
    HeroSkills
  },
  data () {
    return {
      isLoadingHero: false,
      isLoadingItems: false,
      hero: null,
      items: null
    }
  },
  computed: {
    detailHeader () {
      // Asignamos valores a través de
      const {
        name,
        // valor: alias
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = this.hero

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    },
    detailStats () {
      // Devuelve el contenido de stats y agrega classSlug
      return { ...this.hero.stats, classSlug: this.hero.class }
    }
  },
  created () {
    this.isLoadingHero = true
    this.isLoadingItems = true
    const { region, battleTag: account, heroId } = this.$route.params

    getApiHero({ region, account, heroId })
      .then(({ data }) => {
        this.hero = data
      })
      .catch((err) => {
        this.hero = null
        const errObj = {
          routeParams: this.$route.params,
          message: err.message
        }
        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        this.setApiErr(errObj)
        this.$router.push({ name: 'Error' })
      })
      .finally(() => {
        this.isLoadingHero = false
      })

    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        this.items = data
      })
      .catch((err) => {
        this.items = null
        console.log(err)
      })
      .finally(() => {
        this.isLoadingItems = false
      })
  }
}
</script>
