import {MutationTree} from 'vuex';
import {ProfileState, User} from './types';

export const mutations: MutationTree<ProfileState> = {
  profileLoaded(state, payload: User) {
    state.error = false;
    state.user = payload;
    state.loggedIn = true;
  },
  profileError(state) {
    state.error = true;
    state.user = undefined;
    state.loggedIn = false;
  },
  profileLogout(state) {
    state.error = false;
    state.loggedIn = false;
    state.user = undefined;
  }
};

