import { Client } from "discord.js";
import Config from "./config";
import BotCommands from "./commands";
class Bot {
  private token: string | undefined = process.env.BOT_TOKEN;
  constructor() {
    Config.init();
  }

  //create client
  client: Client = new Client({
    intents: [],
  });

  //auth
  async login(): Promise<void> {
    await this.client.login(this.token);
  }

  //bot listeners
  listeners() {
    this.client.on("ready", () => {
      console.log("Bot is active");
    });
  }

  //bot init
  async init() {
    await this.login();
    if (!this.client.user || !this.client.application) {
      return;
    }
    this.listeners();
    new BotCommands(this.client).init();
  }
}

// Start bot
new Bot().init();
