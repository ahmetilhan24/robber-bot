import { Client } from "discord.js";
import Config from "./config";

class Bot {
  private token: string | undefined = process.env.BOT_TOKEN;
  constructor() {
    Config.init();
    this.init();
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
  }
}

// Start bot
new Bot();
