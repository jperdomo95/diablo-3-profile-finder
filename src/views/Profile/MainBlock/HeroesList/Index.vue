<template>
  <div>
    <h1>Hero List</h1>
    <b-table
      hover
      stripped
      dark
      :items="heroes"
      :fields="fields"
      stacked="sm"
      small
    >
      <!-- Contenido -->
      <template #cell(name)="data">
        <hero-ico :hero="data.item"></hero-ico>
      </template>

      <template #cell(class)="data">
        <hero-class-level :hero="{ class: data.item.classSlug, level: data.item.level}"></hero-class-level>
      </template>

      <template #cell(kills)="data">
        <span>{{ data.item.kills.elites | formatNumber }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from './HeroIco'
import HeroClassLevel from './HeroClassLevel'
import { formatNumber } from '@/filters/numeral'
export default {
  name: 'HeroesList',
  filters: {
    formatNumber
  },
  props: {
    heroes: {
      required: true,
      type: Array
    }
  },
  components: { HeroIco, HeroClassLevel },
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true
        },
        {
          key: 'kills',
          label: 'Elite Kills',
          sortable: true
        }
      ]
    }
  }
}
</script>
