import {Component, Vue} from 'vue-property-decorator'
import {Action, Getter, State} from 'vuex-class';
import {UserState} from './store/user/states';
import router from './router';

const namespace: string = 'user';


@Component({
  template: require('./app.pug')(),
  router
})
export default class AppComponent extends Vue {
  @State('user') user: UserState;
  @Action('logout', {namespace}) logout: any;
  @Getter('fullName', {namespace}) fullName: string;
  items = [
    {title: 'Home', icon: 'label', routerName: 'home', subItems: null},
    {title: 'About', icon: 'info', routerName: 'about', subItems: null},
    {title: 'List', icon: 'lock', routerName: 'list', subItems: null},
    {
      title: 'Customer List',
      icon: 'dashboard',
      routerName: 'customer-list',
      subItems: [
        {title: 'Decimal', routerName: ''}
      ],
    }
  ];
  drawer = true;
  mini = false;

  get email() {
    const {user} = this.user;
    return (user && user.email) || '';
  }

  get imageUrl() {
    const {user} = this.user;
    return user.profile.picture || 'https://randomuser.me/api/portraits/men/85.jpg';
  }

  get isLogin(): boolean {
    return (this.user && this.user.loggedIn);
  }

  public signout() {
    this.logout();
    this.$router.push({name: 'login'});
  }

  public login() {
    this.$router.push({name: 'login'});
  }
}
