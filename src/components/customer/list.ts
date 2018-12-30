import {Component, Vue} from 'vue-property-decorator'
import '@/styles/stylus/list.styl'
import Customer from '../../models/customer';
import {Action, Getter} from 'vuex-class';

const namespace: string = 'customer';

@Component({
  template: require('./list.pug')(),
  components: {},
})
export class ListCustomerComponent extends Vue {
  @Action('getListCustomer', {namespace}) getListCustomer: any;
  @Getter('customers', {namespace}) customers: Customer[];

  items: Customer[] = [];

  mounted() {
    this.getListCustomer();
  }

  public editCustomer(id: string) {
    this.$router.push({
      name: 'customer-update',
      params: {id}
    });
  }

  public goToAddCustomer() {
    this.$router.push({name: 'customer-add'})
  }
}
