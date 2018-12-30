import {Component, Vue} from 'vue-property-decorator'
import Customer from '../../models/customer';
import {Action, Getter} from 'vuex-class';

const namespace: string = 'customer';

@Component({
  template: require('./add.pug')(),
  components: {}
})
export class AddCustomerComponent extends Vue {
  @Action('addCustomer', {namespace}) addCustomer: any;

  item: Customer = new Customer('', '', '', '', '', '', '', '', '');
  valid = true;

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

  public add() {
    const isValidated = (this.$refs.form as any).validate();
    if (isValidated) {
      this.addCustomer(this.item);
    }
  }

  public goToListCustomer() {
    this.$router.push({name: 'customer-list'})
  }
}
