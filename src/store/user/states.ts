import User from '../../models/user';

export interface UserState {
  user?: User;
  error: boolean;
  loggedIn: boolean;
}
