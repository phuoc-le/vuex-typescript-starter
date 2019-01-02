import {Component, Vue} from 'vue-property-decorator'
import {Action} from 'vuex-class';
import {UserLogin} from '../../models/user';

const namespace: string = 'user';

@Component({
  template: require('./register.pug')()
})
export class RegisterComponent extends Vue {
  @Action('register', {namespace}) register: any;

  item: UserLogin = {
    fullName: 'Phuoc Pro',
    email: 'test@gmail.com',
    password: '123456',
    confirmPassword: '123456'
  };

  valid = true;
  emailAlreadyExist = false;

  get rules() {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return {
      required: value => !!value || 'Required.',
      counter: value => value.length >= 6 || 'At least 6 characters',
      email: value => {
        return pattern.test(value) || 'Invalid e-mail.'
      },
      passwordMatch: value => this.isPasswordMatch || 'Passwords do not match.'
    }
  }

  get isPasswordMatch(): boolean {
    return this.item.password === this.item.confirmPassword;
  }

  public signup() {
    const isValidated = (this.$refs.form as any).validate();
    if (isValidated && (this.item.password === this.item.confirmPassword)) {
      this.register(this.item).then((res) => {
        if (res && res.user) {
          this.$router.push({name: 'home'});
        } else {
          if (res.message.length > 0) {
            this.emailAlreadyExist = true;
          }
          this.$router.push({name: 'register'})
        }
      }).catch((err) => {
        console.log('index|', err);
      });
    }
  }
}
