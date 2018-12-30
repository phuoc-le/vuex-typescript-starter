export default class User {
  fullName: string = '';
  email: string = '';
  profile: any;

  constructor(fullName: string,
              email: string, profile: any) {
    this.fullName = fullName;
    this.email = email;
    this.profile = profile;
  }
}
export interface UserLogin {
  email: string;
  password: string;
}
