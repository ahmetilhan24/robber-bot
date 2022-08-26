import BaseService from "../base.service";
import httpInstance from "./http-instance";
export default class CryptoService extends BaseService {
  constructor() {
    super(httpInstance);
  }
}
