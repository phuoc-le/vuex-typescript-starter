import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex';
import {user} from './user';
import {customer} from './customer';
import {RootState} from './rootState';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    user,
    customer
  }
};

export default new Vuex.Store<RootState>(store);
