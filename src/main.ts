import Vue from 'vue'
import Vuetify from 'vuetify';

import '@/styles/sass/main.scss'
import colors from 'vuetify/es5/util/colors';
import store from './store';
import AppMainComponent from './app-root';

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

// tslint:disable-next-line:no-unused-expression

new Vue({
  el: '#app',
  components: {
    'app': AppMainComponent
  },
  store
});
