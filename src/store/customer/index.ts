import {Module} from 'vuex';
import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import {RootState} from '../rootState';
import {CustomerState} from './states';

export const state: CustomerState = {
  customerModel: undefined,
  customers: [],
  error: false,
  messageError: []
};

const namespaced: boolean = true;

export const customer: Module<CustomerState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
