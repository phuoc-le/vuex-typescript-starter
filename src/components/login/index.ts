import {Component, Vue} from 'vue-property-decorator'
import {Action} from 'vuex-class';
import {UserLogin} from '../../models/user';
import {clientId} from '../../helper/constants';

const namespace: string = 'user';

@Component({
  template: require('./login.pug')(),

})
export class LoginComponent extends Vue {
  @Action('login', {namespace}) login: any;
  @Action('loginGoogle', {namespace}) loginGoogle: any;

  item: UserLogin = {
    email: 'test@gmail.com',
    password: '123456'
  };

  public signin() {
    this.login(this.item).then((res) => {
      if (res) {
        this.$router.push({name: 'home'});
      } else {
        this.$router.push({name: 'login'})
      }
    });
  }

  get googleSignInParams() {
    return {
      client_id: clientId
    }
  }

  onSignInSuccess(googleUser) {
    const id_token = googleUser.Zi.id_token;
    const access_token = googleUser.Zi.access_token;
    this.loginGoogle({id_token, access_token}).then((res) => {
      if (res) {
        this.$router.push({name: 'home'});
      } else {
        this.$router.push({name: 'login'})
      }
    });
  };

  onSignInError(error) {
    this.$router.push({name: 'login'})
  }

}
