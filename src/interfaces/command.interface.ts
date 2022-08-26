import { Message } from "discord.js";

export default interface ICommand {
  name: string;
  description: string;
  run?: (message: Message, args: string[]) => void;
}
