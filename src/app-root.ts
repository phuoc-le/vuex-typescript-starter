import {Component, Vue} from 'vue-property-decorator'
import {Action} from 'vuex-class';
import AppComponent from './app';

const namespace: string = 'user';
import './styles/sass/loading.scss';
@Component({
  template: require('./loading.pug')(),
  components: {
    'app-component': AppComponent
  }
})
export default class AppMainComponent extends Vue {
  @Action('fetchData', {namespace}) fetchData: any;
  loading: boolean = true;

  mounted() {
    this.$nextTick(async () => {
      try {
        await this.fetchData();
      } catch (e) {

      } finally {
        this.loading = false;
      }
    });
  }
}
