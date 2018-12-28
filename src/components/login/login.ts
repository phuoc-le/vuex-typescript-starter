import {Component, Vue} from 'vue-property-decorator'
import axios from 'axios'
import {getHostUrl} from '../../repository/const';
import {Action, State} from 'vuex-class';
import {ProfileState} from '../../store/profile/types';

const namespace: string = 'profile';

interface UserResponse {
  email: string;
  password: string;
}

@Component({
  template: require('./login.pug')()
})
export class LoginComponent extends Vue {
  @State('profile') profile: ProfileState;
  @Action('login', {namespace}) login: any;
  item: UserResponse = {
    email: 'marlee_mraz80@yahoo.com',
    password: '123456'
  };
  protected axios;
  url = getHostUrl() + '/login';

  constructor() {
    super();
    this.axios = axios
  }

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
