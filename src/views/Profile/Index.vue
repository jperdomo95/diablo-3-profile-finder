<template>
  <div>
    <base-loading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <main-block :profile-data="profileData"/>
      <artisans-block :artisans-data="artisansData"></artisans-block>
    </template>
  </div>
</template>

<script>
import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index'
// Importar
import ArtisansBlock from './ArtisansBlock/Index.vue'

export default {
  name: 'ProfileView',
  mixins: [
    setError
  ],
  components: {
    BaseLoading,
    ArtisansBlock,
    // Habilitar componente
    MainBlock
  },
  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
    }
  },
  data () {
    return {
      isLoading: false,
      profileData: null
    }
  },
  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },
  methods: {
    /**
     *  Obtener los datos de la API
     *  Guardarlos en 'profileData'
     */
    fetchData (region, account) {
      // Desestructuración de los parámetros
      // Llamada a la API con los datos necesarios
      getApiAccount({ region, account })
        .then(({ data }) => {
          // Guardamos los datos de la respuesta en la propiedad profileData
          this.profileData = data
        }).catch((err) => {
          this.profileData = null
          // Creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }
          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }
          // Hacemos uso del Mixin
          // Guardamos el objeto en el Store
          this.setApiErr(errObj)
          // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'error' })
        }).finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
