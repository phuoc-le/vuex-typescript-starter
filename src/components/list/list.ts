import {Component, Vue} from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios'
import bContainer from 'bootstrap-vue/es/components/layout/container'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'

interface UserResponse {
  id: string
  firstName: string
  lastName: string
  address: string
  email: string
}

@Component({
  template: require('./list.pug')(),
  components: {
    'b-container': bContainer,
    'b-col': bCol,
    'b-row': bRow
  }
})
export class ListComponent extends Vue {

  items: UserResponse[] = [];
  protected axios;
  private url = 'http://127.0.0.1:8080/customer-manage/list';

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
      this.axios.get(this.url,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((response: AxiosResponse) => {
        this.items = response.data
        console.log('list|', this.items);
      }, (error) => {
        console.error(error)
      })
    }
  }

  public goToListCustomer() {
    this.$router.push({name: 'customer-add'})
  }
}
