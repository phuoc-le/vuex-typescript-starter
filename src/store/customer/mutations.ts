import {MutationTree} from 'vuex';
import {CustomerState} from './states';
import Customer from '../../models/customer';
import * as types from './types';

export const mutations: MutationTree<CustomerState> = {
  [types.ADD_CUSTOMER_REQUEST](state) {
    state.error = false;
    state.messageError = [];
  },
  [types.ADD_CUSTOMER_SUCCESS](state) {
    state.error = false;
    state.messageError = [];
  },
  [types.ADD_CUSTOMER_FAILED](state, messageError: any[]) {
    state.error = false;
    state.messageError = messageError;
  },
  [types.ADD_CUSTOMER_ERROR](state) {
    state.error = true;
    state.messageError = undefined;
  },
  [types.UPDATE_CUSTOMER_SUCCESS](state) {
    state.error = false;
    state.messageError = [];
  },
  [types.UPDATE_CUSTOMER_FAILED](state, messageError: any[]) {
    state.error = false;
    state.messageError = messageError;
  },
  [types.UPDATE_CUSTOMER_ERROR](state) {
    state.error = true;
    state.messageError = undefined;
  },
  [types.REMOVE_CUSTOMER_SUCCESS](state) {
    state.error = false;
  },
  [types.REMOVE_CUSTOMER_ERROR](state) {
    state.error = true;
  },
  [types.LIST_CUSTOMER_SUCCESS](state, payload: Customer[]) {
    state.customers = payload;
    state.error = false;
    state.messageError = [];
  },
  [types.LIST_CUSTOMER_ERROR](state) {
    state.error = true;
    state.messageError = undefined;
  },
  [types.CUSTOMER_SUCCESS](state, payload: Customer) {
    state.error = false;
    state.customerModel = payload;
  },
  [types.CUSTOMER_ERROR](state) {
    state.error = true;
  },
};

