import { Client, Message } from "discord.js";
//@ts-ignore
import unwantedWords from "../data/unwanted-words.json";
export default class SpamListener {
  client: Client;
  msg: Message;
  constructor(client: Client, msg: Message) {
    this.client = client;
    this.msg = msg;
    this.init();
  }

  init() {
    this.findSpam();
  }
  findSpam() {
    console.log(unwantedWords);
  }
}
