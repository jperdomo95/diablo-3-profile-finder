// oauth.js

// traer método post de axios
import { post } from 'axios'

// Obtener datos de la cuenta blizzard
const clientId = 'd64590e3a4334d2e833dc167ab245a4a'
const clientSecret = 'EARzcUV6VGy0pYxgrEKGr3iFL1IoMO42'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // Crear objeto de tipo 'FormData', que es un conjunto de pares clave/valor
  const body = new FormData()

  // Con 'append', se agrega la clave 'grant_type' y el valor 'client_credentials'
  body.append('grant_type', 'client_credentials')

  // Parámetros de configuración para hacer la llamada al endpoint oAuth
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  return post(API_URL, body, config)
}

export {
  getToken
}
