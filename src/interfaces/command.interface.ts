import { Client, Interaction } from "discord.js";

export default interface ICommand {
  name: string;
  description: string;
  run?: (client: Client, interaction: Interaction) => void;
}
