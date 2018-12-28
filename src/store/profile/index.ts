import {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {ProfileState} from './types';
import {getters} from './getters';
import {RootState} from '../types';

export const state: ProfileState = {
  user: undefined,
  error: false,
  loggedIn: false,
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
