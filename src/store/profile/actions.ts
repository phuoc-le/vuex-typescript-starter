import {ActionTree} from 'vuex';
import axios from 'axios';
import {ProfileState, User} from './types';
import {getHostUrl} from '../../repository/const';
import {RootState} from '../types';

export const actions: ActionTree<ProfileState, RootState> = {
  fetchData: async function ({commit}) {
    const url = getHostUrl() + '/get-profile';
    const token = localStorage.getItem('id_token');
    try {
      const response = await axios.post(url, {token});
      const payload: User = response && response.data.user;
      if (payload) commit('profileLoaded', payload);
      else  {
        localStorage.removeItem('id_token');
        commit('profileError');
      }
    } catch (error) {
      console.log(error);
      commit('profileError');
    } finally {

    }
  },
  logout: function ({commit}) {
    localStorage.removeItem('id_token');
    commit('profileLogout');
  },
  login: async function ({commit, rootState}, data) {
    const url = getHostUrl() + '/login';
    let payload: User = null;
    await axios.post(url, data).then((item) => {
      if (item.data.status === 'success') {
        payload = item && item.data.user;
        localStorage.setItem('id_token', item.data.token);
        commit('profileLoaded', payload);
      }
    }).catch((err) => {
      console.log(err);
      commit('profileError');
    });
    return payload;
  }
};

