import {Component, Vue} from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
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
  template: require('./update.pug')(),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class UpdateCustomerComponent extends Vue {

  item: CustomerResponse = {
    id: '',
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
  url = getHostUrl() + '/customer-manage/';
  dialog = false;

  constructor() {
    super();
    this.axios = axios
  }

  mounted() {
    this.$nextTick(() => {
      const params = this.$route.params;
      if (params.item) {
        this.item = this.$route.params.item as any;
      } else {
        this.getCustomer(params.id);
      }
    });
  }

  private getCustomer(id: string) {
    this.axios.get(this.url + 'update/' + id).then((response: AxiosResponse) => {
      this.item = response.data;
    }, (error) => {
      console.error(error)
    })
  }

  public updateCustomer(id: string) {
    axios.put(this.url + 'update/' + id, this.item).then((item) => {
      if (item.data.status === 'failed') {
        item.data.errors.map((err) => {
        });
        this.$router.push({
          name: 'customer-update', params: {
            id
          }
        })
      } else {
        this.$router.push({name: 'customer-list'})
      }
    }).catch((err) => {
      console.log('add| error', err);
      this.$router.push({
        name: 'customer-update', params: {
          id
        }
      })
    });
  }

  public removeCustomer(id: string) {
    axios.delete(this.url + 'remove/' + id).then(() => {
      this.$router.push({name: 'customer-list'})
    }).catch(() => {
      this.dialog = false;
      this.$router.push({
        name: 'customer-update', params: {
          id
        }
      })
    })
  }

  public goToListCustomer() {
    this.$router.push({name: 'customer-list'})
  }
}
