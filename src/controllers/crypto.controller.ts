import { Client, Interaction } from "discord.js";
import CryptoService from "../services/crypto";
import { AxiosResponse } from "axios";
import ICrypto from "../interfaces/crypto.interface";
export default class CryptoController {
  client: Client;
  interaction: Interaction;
  constructor(client: Client, interaction: Interaction) {
    this.client = client;
    this.interaction = interaction;
  }
  async sendAllResult() {
    const params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "10",
      offset: "0",
    };
    const res: AxiosResponse | undefined = await CryptoService.get("", params);
    if (res.status !== 200) {
      throw Error(`Service error ${res.data}`);
    }
    if (this.interaction.isCommand()) {
      const coins: ICrypto[] = await Promise.all([
        ...res.data.data.coins.map(async (item: ICrypto) => {
          return {
            name: item.name,
            price: item.price,
            symbol: item.symbol,
          };
        }),
      ]);
      const extractedMessage = await Promise.all(
        coins.map(async (item) => {
          return ` ${item.symbol} ${item.name}: ${item.price},`;
        })
      );

      this.interaction.reply(JSON.stringify(extractedMessage));
    }
  }
}
