import {MutationTree} from 'vuex';
import {UserState} from './states';
import User from '../../models/user';
import * as types from './types';

export const mutations: MutationTree<UserState> = {
  [types.LOGIN_SUCCESS](state, payload: User) {
    state.error = false;
    state.user = payload;
    state.loggedIn = true;
  },
  [types.LOGIN_ERROR](state) {
    state.error = true;
    state.user = undefined;
    state.loggedIn = false;
  },
  [types.PROFILE_SUCCESS](state, payload: User) {
    state.error = false;
    state.user = payload;
    state.loggedIn = true;
  },
  [types.PROFILE_ERROR](state) {
    state.error = true;
    state.user = undefined;
    state.loggedIn = false;
  },
  [types.LOGOUT_SUCCESS](state) {
    state.error = false;
    state.loggedIn = false;
    state.user = undefined;
  },
  [types.LOGOUT_ERROR](state) {
    state.error = true;
    state.loggedIn = true;
  },
  [types.REGISTER_SUCCESS](state, payload: User) {
    state.error = false;
    state.user = payload;
    state.loggedIn = true;
  },
  [types.REGISTER_ERROR](state) {
    state.error = true;
    state.user = undefined;
    state.loggedIn = false;
  },
};

