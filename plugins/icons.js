import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faExternalLinkAlt, faInfo} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faExternalLinkAlt, faInfo);

Vue.component('fa-icon', FontAwesomeIcon);
