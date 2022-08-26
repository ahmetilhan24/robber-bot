import { Client, Interaction } from "discord.js";
import COMMANDS from "../constants/command.constants";
import CryptoController from "../controllers/crypto.controller";

export default class Interactions {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
  create() {
    this.client.on("interactionCreate", async (interaction: Interaction) => {
      if (interaction.isCommand()) {
        switch (interaction.commandName) {
          case COMMANDS.crypto:
            new CryptoController(this.client, interaction).sendAllResult();
            break;
          default:
            break;
        }
      }
    });
  }
}
