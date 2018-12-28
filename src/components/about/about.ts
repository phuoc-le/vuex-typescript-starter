import {Component, Vue, Watch} from 'vue-property-decorator'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import {Logger} from '../../util/log'
import {Getter} from 'vuex-class';

const namespace: string = 'profile';

@Component({
  template: require('./about.html'),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class AboutComponent extends Vue {
  repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript'
  protected logger: Logger

  mounted() {

  }
}
