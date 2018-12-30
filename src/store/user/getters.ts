import {GetterTree} from 'vuex';
import {UserState} from './states';
import {RootState} from '../rootState';


export const getters: GetterTree<UserState, RootState> = {
  fullName(state): string {
    const {user} = state;
    return (user && user.fullName) || '';
  },
  isLoggedIn: state => state.loggedIn,
};
