import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('error', {
      setError: 'SET_ERROR'
    }),
    /**
     * API response error.
     * @params params { Object || null } Error Object
    */
    setApiErr (params) {
      // Invokes the store mutation named SET_ERROR
      this.setError(params)
    }
  }
}
