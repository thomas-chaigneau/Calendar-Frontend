import axios from 'axios';

let instance = null;

class ApiClient {
  constructor(url = null) {
    if (!instance) instance = this;
    this.apiclient = axios.create({ baseURL: url });
    return instance;
  }

  get = (url, options) => this.apiclient.get(url, options);

  post = (url, options) => this.apiclient.post(url, options);

  update = (url, options) => this.apiclient.update(url, options);

  delete = (url, options) => this.apiclient.delete(url, options);
}

export default ApiClient;
