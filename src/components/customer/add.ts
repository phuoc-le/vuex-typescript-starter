import {Component, Vue} from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios'
import {getHostUrl} from '../../repository/const';


interface CustomerResponse {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  memberID: string;
}

@Component({
  template: require('./add.pug')(),
  components: {}
})
export class AddCustomerComponent extends Vue {

  item: CustomerResponse = {
    address: '',
    email: '',
    lastName: '',
    firstName: '',
    country: '',
    phone: '',
    city: '',
    memberID: ''
  };
  protected axios;
  private url = getHostUrl() + '/customer-manage/add';

  constructor() {
    super();
    this.axios = axios
  }

  mounted() {
    this.$nextTick(() => {
    })
  }

  public addCustomer() {
    axios.post(this.url, this.item).then((item) => {
      if (item.data.status === 'failed') {
        item.data.errors.map((err) => {
          console.log('add| error', err.msg)
        });
        this.$router.push('/customer/add')
      } else {
        this.$router.push('/customer/list')
      }
    }).catch((err) => {
      console.log('add| error', err);
      this.$router.push('/customer/add')
    });
  }

  public goToListCustomer() {
    this.$router.push({name: 'customer-list'})
  }
}
