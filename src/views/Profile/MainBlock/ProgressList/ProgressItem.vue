<template>
  <div class="d-flex flex-column" :title="actTitle">
    <div class="boss-img pt-2">
      <div class="act" :class="actClass"></div>
    </div>
    <p class="d-block text-center m-0 lead font-weight-bold">{{ fullActName }}</p>
  </div>
</template>

<script>
const acts = {
  act1: 'I',
  act2: 'II',
  act3: 'III',
  act4: 'IV',
  act5: 'v'
}

export default {
  name: 'ProgressItem',
  props: {
    act: {
      required: true,
      type: Object,
      validator: (act) => {
        // The received act object must have two keys
        return Object.keys(act).length === 2
      }
    }
  },
  computed: {
    fullActName () {
      return `Act ${acts[this.act.actNum]}`
    },
    actClass () {
      const status = this.act.value ? 'done' : 'pending'
      return `${this.act.actNum} ${status}`
    },
    actTitle () {
      return this.act.value ? 'Act completed!💃' : 'Act uncompleted! 🙈'
    }
  }
}
</script>
