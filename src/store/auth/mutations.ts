import {MutationTree} from 'vuex';
import {AuthState} from './types';

export const mutations: MutationTree<AuthState> = {
  checkLogin(state) {
    state.loggedIn = true;
  },
  checkLogout(state) {
    state.loggedIn = false;
  }
};

