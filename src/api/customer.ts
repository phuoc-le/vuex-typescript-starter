import axios from 'axios';
import {getHostUrl} from '../helper/constants';
import Customer from '../models/customer';

export async function getCustomer(id: string) {
  const url = getHostUrl() + '/customer-manage/update/' + id;
  const result: any = await axios.get(url);
  let customer: Customer = null;
  try {
    customer = result && result.data.customer
  } catch (error) {
    console.log('Error serer', error)
  }
  return customer;
}

export function getCustomerById(id: string) {
  const url = getHostUrl() + '/customer-manage/update/' + id;
  return axios.get(url);
}

export function getList() {
  const url = getHostUrl() + '/customer-manage/list';
  return axios.get(url)
}

export function addCustomer(payload: Customer) {
  const url = getHostUrl() + '/customer-manage/add';
  return axios.post(url, payload);
}

export function updateCustomer(payload: Customer) {
  const url = getHostUrl() + '/customer-manage/update/' + payload.id;
  return axios.put(url, payload);
}

export function removeCustomer(id: string) {
  const url = getHostUrl() + '/customer-manage/remove/' + id;
  return axios.delete(url)
}
