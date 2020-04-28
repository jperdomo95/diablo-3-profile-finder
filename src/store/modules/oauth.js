import * as oauth from '@/api/oauth'

const state = { accessToken: null }

const mutations = {
  SET_ACCESS_TOKEN (state, payload) {
    state.accessToken = payload
  }
}

const actions = {
  // Crear función getToken, recibe como parámetro el objeto 'context'
  // Se obtienne 'commit' desde el objeto de la mutación
  getToken ({ commit }) {
    // Pasos:
    // 1 - Hacer llamada HTTP para obtener el token
    // 2 - Si va OK, guardar el token en 'accessToken'. Continuar el flujo normal
    // 3 - Si hay error, limpiar el token de 'accessToken', mostrar log del error

    // Paso 1
    commit('loading/SET_LOADING', true, { root: true })
    oauth.getToken()
      .then(({ data }) => {
        // Paso 2: Guardar valor del token llamando a la mutación
        commit('SET_ACCESS_TOKEN', data.access_token)
      })
      .catch((err) => {
        // Paso 3: En caso de error, limpiamos el token
        commit('SET_ACCESS_TOKEN', null)
        console.log('Error Oauth: ', err)
      })
      .finally(() => {
        // Listo
        commit('loading/SET_LOADING', false, { root: true })
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
