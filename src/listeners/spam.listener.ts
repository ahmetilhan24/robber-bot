import { Client, Message } from "discord.js";
import quickMessageConstants from "../constants/quick-message.constants";
//@ts-ignore
import unwantedWords from "../data/unwanted-words.json";
export default class SpamListener {
  client: Client;
  msg: Message;
  constructor(client: Client, msg: Message) {
    this.client = client;
    this.msg = msg;
  }
  init() {
    this.findSpam();
  }
  async findSpam() {
    const words: string[] = unwantedWords;
    const isSpam: boolean[] = await Promise.all(
      this.msg.content.trim().split(" ").map((msg) => {
        return words.some((item) => item === msg);
      })
    );
    if (isSpam.some((item) => item)) {
      this.msg.reply(quickMessageConstants.UNWANTED_WORD);
    }
  }
}
