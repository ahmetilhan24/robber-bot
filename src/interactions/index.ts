import { Client, Interaction, Message } from "discord.js";
import COMMANDS from "../constants/command.constants";

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
            interaction.reply({
              content: "Borsayı getiriyorum",
              fetchReply: true,
            });
            break;
          default:
            break;
        }
      }
    });
  }
}
