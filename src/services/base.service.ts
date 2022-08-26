import { AxiosInstance } from "axios";
export default class BaseService {
  httpClient: AxiosInstance;
  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }
  async get(url: string, params?: object) {
    return this.httpClient.get<unknown>(url, {
      params: JSON.stringify(params),
    });
  }
}
