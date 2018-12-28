import {Component, Vue} from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios'
import '@/styles/stylus/list.styl'
import {getHostUrl} from '../../repository/const';

interface CustomerResponse {
  id: string;
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
  template: require('./list.pug')(),
  components: {},
})
export class ListCustomerComponent extends Vue {

  items: CustomerResponse[] = [];
  protected axios;
  private url = getHostUrl() + '/customer-manage/list';

  constructor() {
    super();
    this.axios = axios
  }

  mounted() {
    this.$nextTick(() => {
      this.loadItems()
    })
  }

  private loadItems() {
    if (!this.items.length) {
      this.axios.get(this.url).then((response: AxiosResponse) => {
        this.items = response.data;
      }, (error) => {
        console.error(error)
      })
    }
  }

  public editCustomer(id: string) {
    this.$router.push({
      name: 'customer-update',
      params: {
        id: id,
        item: this.items.filter((item) => item.id === id)[0] as any
      }
    });
  }

  public goToAddCustomer() {
    this.$router.push({name: 'customer-add'})
  }
}
