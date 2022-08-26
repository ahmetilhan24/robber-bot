import axios from "axios";
import { TIMEOUT, BASE_SERVICES } from "../../constants/service.constants";

export default axios.create({
  baseURL: BASE_SERVICES.find((item) => item.name === "crypto")?.url,
  timeout: TIMEOUT,
});
