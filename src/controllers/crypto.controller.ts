import { Client, Interaction } from "discord.js";
import CryptoService from "../services/crypto";
import { AxiosResponse } from "axios";
export default class CryptoController {
  client: Client;
  interaction: Interaction;
  constructor(client: Client, interaction: Interaction) {
    this.client = client;
    this.interaction = interaction;
  }
  async sendAllResult() {
    const res: AxiosResponse | undefined = await CryptoService.get("");
    if (res.status === 200) {
      console.log(res.data);
    }
  }
}
