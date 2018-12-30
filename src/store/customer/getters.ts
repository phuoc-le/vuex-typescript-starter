import {GetterTree} from 'vuex';
import {RootState} from '../rootState';
import {CustomerState} from './states';

export const getters: GetterTree<CustomerState, RootState> = {
  customers: state => state.customers,
  getCustomer: state => id => {
    return state.customers.find(customer => customer.id === id)
  },
};


