import {ActionTree} from 'vuex';
import {UserState} from './states';
import {RootState} from '../rootState';
import User from '../../models/user';
import * as types from './types';
import * as userApi from '../../api/user';

export const actions: ActionTree<UserState, RootState> = {
  fetchData: async function ({commit}) {
    try {
      const response = await userApi.fetchData();
      const payload: User = response && response.data.user;
      if (payload) commit(types.PROFILE_SUCCESS, payload);
      else {
        localStorage.removeItem('id_token');
        commit(types.LOGOUT_SUCCESS);
      }
    } catch (error) {
      console.log(error);
      commit(types.PROFILE_ERROR);
    } finally {

    }
  },
  logout: function ({commit}) {
    localStorage.removeItem('id_token');
    commit(types.LOGOUT_SUCCESS);
  },
  login: async function ({commit, rootState}, payload) {
    let user: User = null;
    const response = await userApi.login(payload);
    try {
      if (response.data.status === 'success') {
        user = response && response.data.user;
        localStorage.setItem('id_token', response.data.token);
        commit(types.LOGIN_SUCCESS, user);
      }
    } catch (err) {
      console.log(err);
      commit(types.LOGIN_ERROR);
    }
    return user;
  }
};

