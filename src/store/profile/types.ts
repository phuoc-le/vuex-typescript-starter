export interface User {
  fullName: string;
  email: string;
  profile: {
    gender: string,
    location: string,
    picture: string,
    website: string
  }
}

export interface ProfileState {
  user?: User;
  error: boolean;
  loggedIn: boolean;
}
