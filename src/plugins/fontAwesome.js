import Vue from 'vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Añadir los íconos importados (solid y brands)
library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet
)

// Declaración de component global
// El primer parámetro es el nombre del componente con el cual será llamado desde el template
// El segundo es la refeencia al componente (que acabamos de importar)
Vue.component('font-awesome-icon', FontAwesomeIcon)
