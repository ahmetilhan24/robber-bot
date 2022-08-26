import BaseService from "../base.service";
import httpInstance from "./http-instance";
class CryptoService extends BaseService {
  constructor() {
    super(httpInstance);
  }
}

export default new CryptoService();
