import { AxiosInstance } from "axios";
export default class BaseService {
  httpClient: AxiosInstance;
  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
  }
  get(params: object, url: string) {
    this.httpClient.get(url, {
      params: JSON.stringify(params),
    });
  }
}
