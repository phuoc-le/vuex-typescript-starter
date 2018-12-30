import {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {UserState} from './states';
import {getters} from './getters';
import {RootState} from '../rootState';

export const state: UserState = {
  user: undefined,
  error: false,
  loggedIn: false,
};

const namespaced: boolean = true;

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
