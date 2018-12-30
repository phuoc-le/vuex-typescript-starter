import Customer from '../../models/customer';

export interface CustomerState {
  customerModel?: Customer;
  customers?: Customer[];
  messageError?: any[];
  error: boolean;
}
