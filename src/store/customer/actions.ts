import {ActionTree} from 'vuex';
import {RootState} from '../rootState';
import {CustomerState} from './states';
import * as types from '../customer/types';
import router from '../../router';
import * as customerApi from '../../api/customer';

export const actions: ActionTree<CustomerState, RootState> = {
  addCustomer: async function ({commit}, payload) {
    const response = await customerApi.addCustomer(payload);
    try {
      if (response && response.data.status === 'success') {
        commit(types.ADD_CUSTOMER_SUCCESS);
        router.push({name: 'customer-list'});
      } else {
        commit(types.ADD_CUSTOMER_FAILED, response.data.errors);
      }
    } catch (e) {
      commit(types.ADD_CUSTOMER_ERROR);
    }
  },
  updateCustomer: async function ({commit}, payload) {
    const response = await customerApi.updateCustomer(payload);
    try {
      if (response && response.data.status === 'success') {
        commit(types.UPDATE_CUSTOMER_SUCCESS);
        router.push({name: 'customer-list'});
      } else {
        commit(types.UPDATE_CUSTOMER_FAILED, response.data.errors);
      }
    } catch (error) {
      console.log('Update customer erro', error);
      commit(types.UPDATE_CUSTOMER_ERROR);
    }
  },
  getListCustomer: async function ({commit}) {
    const response = await customerApi.getList();
    try {
      if (response && response.data) {
        commit(types.LIST_CUSTOMER_SUCCESS, response.data);
      }
    } catch (error) {
      commit(types.LIST_CUSTOMER_ERROR);
    }
  },
  getCustomerById: async function ({commit}, id) {
    const response = await customerApi.getCustomerById(id);
    try {
      if (response && response.data) {
        commit(types.CUSTOMER_SUCCESS, response.data.customer);
      }
    } catch (error) {
      commit(types.CUSTOMER_ERROR);
    }
  },
  removeCustomer: async function ({commit}, id) {
    const response = await customerApi.removeCustomer(id);
    try {
      commit(types.REMOVE_CUSTOMER_SUCCESS);
      router.push({name: 'customer-list'});
    } catch (error) {
      router.push({name: 'customer-update', params: {id}});
    }

  }
};

