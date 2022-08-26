import { Client } from "discord.js";
import CryptoCommand from "./crypto.command";
export default class BotCommands {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
  init() {
    this.client.application?.commands.set([CryptoCommand.command]);
  }
}
