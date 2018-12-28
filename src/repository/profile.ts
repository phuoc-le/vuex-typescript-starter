export interface UserProfile {
  fullName: string;
  email: string;
  profile: {
    gender: string,
    location: string,
    picture: string,
    website: string
  }
}

class Profile {
  private user: UserProfile;

  public setProfile(user: UserProfile): void {
    this.user = user;
  }

  public getProfile(): UserProfile {
    return this.user;
  }
}

const profile = new Profile();
export default profile;
