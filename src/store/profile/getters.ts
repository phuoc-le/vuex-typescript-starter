import {GetterTree} from 'vuex';
import {ProfileState} from './types';
import {RootState} from '../types';


export const getters: GetterTree<ProfileState, RootState> = {
  fullName(state): string {
    const {user} = state;
    return (user && user.fullName) || '';
  },
  isLoggedIn: state => state.loggedIn,
};
