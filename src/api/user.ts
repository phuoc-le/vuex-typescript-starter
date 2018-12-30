import axios from 'axios';
import {getHostUrl} from '../repository/const';

export function fetchData() {
  const token = localStorage.getItem('id_token');
  const url = getHostUrl() + '/get-profile';
  return axios.post(url,{token})
}

export function login(payload: any) {
  const url = getHostUrl() + '/login';
  return axios.post(url, payload)
}
