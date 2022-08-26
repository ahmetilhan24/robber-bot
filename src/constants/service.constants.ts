import IBaseService from "../interfaces/base.service";

export const TIMEOUT: number = 10000;
export const BASE_SERVICES: IBaseService[] = [
  {
    name: "crypto",
    url: "https://coinranking1.p.rapidapi.com/coins",
    token: process.env.CRYPTO_SERVICE_TOKEN || "",
  },
];
