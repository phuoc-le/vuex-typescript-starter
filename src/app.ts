import {Component, Vue} from 'vue-property-decorator'
import {Action, Getter, State} from 'vuex-class';
import {ProfileState} from './store/profile/types';
import router from './router';

const namespace: string = 'profile';


@Component({
  template: require('./app.pug')(),
  router
})
export default class AppComponent extends Vue {
  @State('profile') profile: ProfileState;
  @Action('fetchData', {namespace}) fetchData: any;
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
  mini = true;

  mounted() {
  }

  get email() {
    const user = this.profile && this.profile.user;
    return (user && user.email) || '';
  }

  get imageUrl() {
    return this.profile.user.profile.picture || 'https://randomuser.me/api/portraits/men/85.jpg';
  }

  get isLogin(): boolean {
    return !!(this.profile && this.profile.user);
  }

  public signout() {
    this.logout();
    this.$router.push({name: 'login'});
  }

  public login() {
    this.$router.push({name: 'login'});
  }
}
