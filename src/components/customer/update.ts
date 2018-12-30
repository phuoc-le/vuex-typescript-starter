import {Component, Vue} from 'vue-property-decorator'
import Customer from '../../models/customer';
import {Action, Getter} from 'vuex-class';
import {getCustomer} from '../../api/customer';

const namespace: string = 'customer';

@Component({
  template: require('./update.pug')(),
  components: {}
})
export class UpdateCustomerComponent extends Vue {
  @Action('updateCustomer', {namespace}) updateCustomer: any;
  @Action('removeCustomer', {namespace}) removeCustomer: any;
  @Getter('getCustomer', {namespace}) getCustomer: any;

  item: Customer = new Customer('', '', '', '', '', '', '', '', '');
  dialog = false;
  valid = true;

  mounted() {
    const {id} = this.$route.params;
    this.$nextTick(async () => {
      if (this.getCustomer(id)) this.item = this.getCustomer(id);
      else {
        await this.getCustomerFromServer(id);
      }
    });
  }

  get rules() {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return {
      required: value => !!value || 'Required.',
      counter: value => value.length <= 20 || 'Max 20 characters',
      email: value => {
        return pattern.test(value) || 'Invalid e-mail.'
      }
    }
  }

  public update() {
    const isValidated = (this.$refs.form as any).validate();
    if (isValidated) {
      this.updateCustomer(this.item);
    }
  }

  public remove(id: string) {
    this.removeCustomer(id);
  }

  async getCustomerFromServer(id: string) {
    const customer: Customer = await getCustomer(id);
    if (customer) this.item = customer;
  }

  public goToListCustomer() {
    this.$router.push({name: 'customer-list'})
  }
}
