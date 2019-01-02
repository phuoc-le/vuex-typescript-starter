import {Component, Vue} from 'vue-property-decorator'
import axios, {AxiosResponse} from 'axios'

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
  }
})
export class ListComponent extends Vue {

  items: UserResponse[] = [];
  protected axios;
  private url = 'http://localhost:8080/customer-manage/list';

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
        this.items = response.data
      }, (error) => {
        console.error(error)
      })
    }
  }

  public goToListCustomer() {
    this.$router.push({name: 'customer-add'})
  }
}
