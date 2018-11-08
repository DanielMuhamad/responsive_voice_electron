import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faVolumeDown,
  faSpinner,
  faPlay,
  faRocket,
  faUndo
} from "@fortawesome/free-solid-svg-icons";

library.add(faVolumeDown, faPlay, faRocket, faSpinner, faUndo);

Vue.component("font-awesome-icon", FontAwesomeIcon);
