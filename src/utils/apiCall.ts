import axios from 'axios';

export const apiCall = (method: any, url: string, payload = {}) =>
  axios({
    method,
    data: payload,
    url,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
  