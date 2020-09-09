import { API_URL } from '../config/Environments';
import * as Token from '../storage/Token';
import { store } from '../../store/Store'
import { auth } from '../../services/Auth/AuthActions';

export class Api {

  async post(url, data, formData) {
    const token = await Token.get()
    let dataBody

    if (formData) {
      dataBody = new FormData();
      Object.keys(data).map(key => {
        if (!Array.isArray(data[key])) {
          const isFile = data[key] && data[key].size
          const isJson = typeof data[key] === 'object'

          dataBody.append(key, isFile || !isJson ? data[key] : JSON.stringify(data[key]));
        } else
          data[key].forEach(item => dataBody.append(key, item))
      })
    } else
      dataBody = JSON.stringify(data)

    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: (formData ? {
        'Authorization': `Bearer ${token}`
      } : {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }),
      body: dataBody
    }).then(async response => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      return await response.json()
    }).catch(err => err)
  }

  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  put(url, data, header) {
    let isFormData = data instanceof FormData;

    return fetch(`${API_URL}${url}`, {
      method: 'PUT',
      headers: (header ? header :
        isFormData ?
          { 'Authorization': `Bearer ${Token.get()}` }
          :
          {
            'Accept': isFormData ? '' : 'application/json',
            'Content-type': isFormData ? '' : 'application/json',
            'Authorization': `Bearer ${Token.get()}`
          }
      ),
      body: isFormData ? data : JSON.stringify(data)
    }).then(async response => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      response.payload = await response.json()
      return response;
    }).catch(err => err)
  }

  async get(url, params) {
    const token = await Token.get()
    if (params)
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(async response => {
      if (response.status === 401) {
        store.dispatch(auth.logout());
        return response;
      }
      return await response.json()
    }).catch(err => { console.log(err) })
  }

}

export default new Api();