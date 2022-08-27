import { Client, Message } from "discord.js";
import { MENTIONS } from "../constants/mention.constants";

export default class MentionListener {
  client: Client;
  msg: Message;
  constructor(client: Client, msg: Message) {
    this.client = client;
    this.msg = msg;
  }
  init() {
    this.mentionControl();
  }
  mentionControl() {
    const isMention =
      this.msg.content.toLowerCase().trim().search("robber") !== -1 ||
      this.msg.mentions.users.some((user) => user.id === this.client.user?.id);
    if (isMention) {
      const question = Object.keys(MENTIONS).find(
        (key: string) =>
          (this.msg.content.split(">")[1]?.trim() ||
            this.msg.content.split("robber")[1]?.trim()) === key
      );
      if (!question) {
        this.msg.reply("Sir");
      } else if (question) {
        //@ts-ignore
        this.msg.reply(MENTIONS[question]);
      } else {
        this.msg.reply("I'm sorry I did not understand");
      }
    }
  }
}
