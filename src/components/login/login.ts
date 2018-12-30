import {Component, Vue} from 'vue-property-decorator'
import {Action} from 'vuex-class';
import {UserLogin} from '../../models/user';

const namespace: string = 'user';

@Component({
  template: require('./login.pug')()
})
export class LoginComponent extends Vue {
  @Action('login', {namespace}) login: any;

  item: UserLogin = {
    email: 'evans35@hotmail.com',
    password: '123456'
  };

  mounted() {
    this.$nextTick(() => {
    })
  }

  public signin() {
    this.login(this.item).then((res) => {
      if (res) {
        this.$router.push({name: 'home'});
      } else {
        this.$router.push({name: 'login'})
      }
    });
  }

  public goToListCustomer() {
    this.$router.push({name: ''})
  }
}
