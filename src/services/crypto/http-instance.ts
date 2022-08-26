import axios from "axios";
import { TIMEOUT, BASE_SERVICES } from "../../constants/service.constants";
import IBaseService from "../../interfaces/base-service.interface";
//@ts-ignore
const serviceData: IBaseService = BASE_SERVICES.find(
  (item) => item.name === "crypto"
);
export default axios.create({
  baseURL: serviceData.url,
  timeout: TIMEOUT,
  headers: {
    "X-RapidAPI-Key": serviceData.token,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
  // transformResponse: [
  //   (res: AxiosResponse) => {
  //     //@ts-ignore
  //     let { data } = JSON.parse(res);
  //     return data;
  //   },
  // ],
});
