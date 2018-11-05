import Vue from 'vue'
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    faPlayCircle,
    faVolumeUp,
    faVolumeDown,
    faTachometerAlt,
    faCircle,
    faSpinner
} from '@fortawesome/free-solid-svg-icons'

library.add(faPlayCircle, faVolumeUp, faVolumeDown, faTachometerAlt, faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)