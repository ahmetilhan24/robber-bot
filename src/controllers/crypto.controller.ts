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
      limit: "20",
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
          return `**${item.symbol} ${item.name}**: ${item.price},`;
        })
      );
      let messageContent: string = "";
      extractedMessage.forEach((item, index) => {
        messageContent +=
          item +
          `
`;
        if (index + 1 === extractedMessage.length) {
          //@ts-ignore
          this.interaction.reply(messageContent);
        }
      });
    }
  }
}
