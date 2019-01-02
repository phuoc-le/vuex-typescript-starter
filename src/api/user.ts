import axios from 'axios';
import {getHostUrl} from '../helper/constants';

export function fetchData() {
  const token = localStorage.getItem('id_token');
  const url = getHostUrl() + '/get-profile';
  return axios.post(url, {token})
}

export function login(payload) {
  const url = getHostUrl() + '/login';
  return axios.post(url, payload)
}

export function logout() {
  const url = getHostUrl() + '/logout';
  return axios.post(url)
}

export function register(payload) {
  const url = getHostUrl() + '/signup';
  return axios.post(url, payload)
}

export function loginGoogle(payload) {
  const url = getHostUrl() + '/google';
  return axios.post(url, payload);
}
